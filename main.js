setInterval(() => {
	const time = Date.now();
	document.getElementById("time").innerHTML = time;
}, 1000);

// Contact form validation
document.addEventListener("DOMContentLoaded", function () {
	const contactForm = document.getElementById("contactForm");

	if (contactForm) {
		contactForm.addEventListener("submit", function (e) {
			e.preventDefault();

			// Clear previous errors
			clearErrors();

			// Get form data
			const formData = {
				fullName: document.getElementById("fullName").value.trim(),
				email: document.getElementById("email").value.trim(),
				subject: document.getElementById("subject").value.trim(),
				message: document.getElementById("message").value.trim(),
			};

			// Validate form
			let isValid = true;

			// Validate full name
			if (!formData.fullName) {
				showError("name-error", "Full name is required");
				isValid = false;
			}

			// Validate email
			if (!formData.email) {
				showError("email-error", "Email is required");
				isValid = false;
			} else if (!isValidEmail(formData.email)) {
				showError("email-error", "Please enter a valid email address");
				isValid = false;
			}

			// Validate subject
			if (!formData.subject) {
				showError("subject-error", "Subject is required");
				isValid = false;
			}

			// Validate message
			if (!formData.message) {
				showError("message-error", "Message is required");
				isValid = false;
			} else if (formData.message.length < 10) {
				showError(
					"message-error",
					"Message must be at least 10 characters long"
				);
				isValid = false;
			}

			// If valid, show success message
			if (isValid) {
				showSuccess();
				contactForm.reset();
			}
		});

		// Real-time validation
		const inputs = contactForm.querySelectorAll("input, textarea");
		inputs.forEach((input) => {
			input.addEventListener("blur", function () {
				this.classList.add("user-touched");
				validateField(this);
			});

			input.addEventListener("input", function () {
				// Clear error on input
				const errorId = this.getAttribute("aria-describedby");
				if (errorId) {
					clearFieldError(errorId);
				}
			});
		});
	}
});

function validateField(field) {
	const value = field.value.trim();
	const fieldName = field.name;
	const errorId = field.getAttribute("aria-describedby");

	clearFieldError(errorId);

	switch (fieldName) {
		case "fullName":
			if (!value) {
				showError(errorId, "Full name is required");
			}
			break;
		case "email":
			if (!value) {
				showError(errorId, "Email is required");
			} else if (!isValidEmail(value)) {
				showError(errorId, "Please enter a valid email address");
			}
			break;
		case "subject":
			if (!value) {
				showError(errorId, "Subject is required");
			}
			break;
		case "message":
			if (!value) {
				showError(errorId, "Message is required");
			} else if (value.length < 10) {
				showError(
					errorId,
					"Message must be at least 10 characters long"
				);
			}
			break;
	}
}

function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function getInputFieldByErrorId(errorId) {
	// Map error IDs to their corresponding input field IDs
	const errorToInputMap = {
		"name-error": "fullName",
		"email-error": "email",
		"subject-error": "subject",
		"message-error": "message",
	};

	const inputId = errorToInputMap[errorId];
	return inputId ? document.getElementById(inputId) : null;
}

function showError(errorId, message) {
	const errorElement = document.getElementById(errorId);
	if (errorElement) {
		errorElement.textContent = message;
		errorElement.style.display = "block";

		// Add error class to the input field
		const inputField = getInputFieldByErrorId(errorId);
		if (inputField) {
			inputField.classList.add("has-error");
			inputField.classList.remove("has-success");
		}
	}
}

function clearFieldError(errorId) {
	const errorElement = document.getElementById(errorId);
	if (errorElement) {
		errorElement.textContent = "";
		errorElement.style.display = "none";

		// Remove error class from the input field
		const inputField = getInputFieldByErrorId(errorId);
		if (inputField) {
			inputField.classList.remove("has-error");
			// Add success class if field is valid and has content
			if (inputField.value.trim() && inputField.checkValidity()) {
				inputField.classList.add("has-success");
			}
		}
	}
}

function clearErrors() {
	const errorElements = document.querySelectorAll(".error-message");
	errorElements.forEach((element) => {
		element.textContent = "";
		element.style.display = "none";
	});

	// Clear all error, success, and user-touched classes from inputs
	const inputs = document.querySelectorAll("input, textarea");
	inputs.forEach((input) => {
		input.classList.remove("has-error", "has-success", "user-touched");
	});
}

function showSuccess() {
	const successElement = document.getElementById("success-message");
	if (successElement) {
		successElement.style.display = "block";
		// Hide success message after 5 seconds
		setTimeout(() => {
			successElement.style.display = "none";
		}, 5000);
	}
}
