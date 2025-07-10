
   class LessonPlanForm {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.form = document.getElementById('lessonPlanForm');
        this.nextBtn = document.getElementById('nextBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.submitBtn = document.getElementById('submit-lesson-plan');
        this.progressFill = document.getElementById('progressFill');
        
        this.initEventListeners();
        this.updateProgress();
    }

    initEventListeners() {
        this.nextBtn.addEventListener('click', () => this.nextStep());
        this.prevBtn.addEventListener('click', () => this.prevStep());
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Add input validation listeners
        this.form.addEventListener('input', (e) => this.clearError(e.target));
        this.form.addEventListener('change', (e) => this.clearError(e.target));
    }

    validateStep(step) {
        const currentStepElement = document.querySelector(`.step[data-step="${step}"]`);
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                this.showError(field, `This field is required`);
                isValid = false;
            } else {
                this.clearError(field);
            }
        });

        // Additional validation for step 4 (students)
        if (step === 4) {
            const femaleReg = parseInt(document.getElementById('femaleReg').value) || 0;
            const maleReg = parseInt(document.getElementById('maleReg').value) || 0;
            const femalePres = parseInt(document.getElementById('femalePres').value) || 0;
            const malePres = parseInt(document.getElementById('malePres').value) || 0;

            if (femalePres > femaleReg) {
                this.showError(document.getElementById('femalePres'), 'Present girls cannot exceed registered girls');
                isValid = false;
            }

            if (malePres > maleReg) {
                this.showError(document.getElementById('malePres'), 'Present boys cannot exceed registered boys');
                isValid = false;
            }
        }

        return isValid;
    }

    validateAllFields() {
        const hourCodes = document.getElementById("hourCodes")?.value;
        const minCodes = document.getElementById("minCodes")?.value;
        const school = document.getElementById("school")?.value;
        const teacherName = document.getElementById("teacherName")?.value;
        const date = document.getElementById("date")?.value;
        const subject = document.getElementById("subject")?.value;
        const classes = document.getElementById("classes")?.value;
        const streams = document.getElementById("streams")?.value;
        const period = document.getElementById("period")?.value;
        const femaleReg = document.getElementById("femaleReg")?.value;
        const maleReg = document.getElementById("maleReg")?.value;
        const femalePres = document.getElementById("femalePres")?.value;
        const malePres = document.getElementById("malePres")?.value;
        const specificLesson = document.getElementById("specificLesson")?.value;
        const tlmaterials = document.getElementById("tlmaterials")?.value;
        const wrdImp1 = document.getElementById("wrdImp1")?.value;
        const wrdImp2 = document.getElementById("wrdImp2")?.value;

        if (
            !hourCodes || !minCodes || !school || !teacherName || !date || !subject || !classes || 
            !streams || !period || !femaleReg || !maleReg || !femalePres || !malePres || 
            !specificLesson || !tlmaterials || !wrdImp1 || !wrdImp2
        ) {
            return false; 
        }
        return true; 
    }

    showError(field, message) {
        field.classList.add('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    clearError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    nextStep() {
        if (this.validateStep(this.currentStep)) {
            if (this.currentStep < this.totalSteps) {
                this.currentStep++;
                this.updateStep();
            }
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateStep();
        }
    }

    updateStep() {
        // Hide all steps
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });

        // Show current step
        document.querySelector(`.step[data-step="${this.currentStep}"]`).classList.add('active');

        // Update step indicators
        document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
            indicator.classList.remove('active', 'completed');
            if (index + 1 < this.currentStep) {
                indicator.classList.add('completed');
            } else if (index + 1 === this.currentStep) {
                indicator.classList.add('active');
            }
        });

        // Update step labels
        document.querySelectorAll('.step-label').forEach((label, index) => {
            label.classList.remove('active');
            if (index + 1 === this.currentStep) {
                label.classList.add('active');
            }
        });

        // Update buttons
        this.prevBtn.style.display = this.currentStep > 1 ? 'block' : 'none';
        this.nextBtn.style.display = this.currentStep < this.totalSteps ? 'block' : 'none';
        this.submitBtn.style.display = this.currentStep === this.totalSteps ? 'block' : 'none';

        // Update progress
        this.updateProgress();
    }

    updateProgress() {
        const progress = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
        this.progressFill.style.width = `${progress}%`;
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateAllFields()) {
            console.error("Please fill in all required fields.");
            alert("Make sure You Fill all required selection and space and then click 'SUBMIT'");
            return; 
        }

        if (this.validateStep(this.currentStep)) {
            // Clear saved data since form is being submitted
            this.clearSavedData();
            
            // Update content (call the updateContent function if it exists)
            if (typeof updateContent === 'function') {
                updateContent();
            }
            
            // Show success message
            this.showSuccessMessage();
        }
    }

    showSuccessMessage() {
        const container = document.querySelector('.container');
        
        const successPageHTML = `
            <div class="success-page" style="text-align: center; padding: 40px 20px;">
                <div style="max-width: 600px; margin: 0 auto;">
                    <div style="width: 100px; height: 100px; background: #28a745; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 30px;">
                        <span style="color: white; font-size: 50px;">✓</span>
                    </div>
                    <h2 style="color: #28a745; margin-bottom: 20px;">Lesson Plan Created Successfully!</h2>
                    <p style="color: #6c757d; font-size: 1.2rem; margin-bottom: 30px; text-transform: capitalize; font-weight: bold; font-family: verdana;">
                        Your lesson plan has been successfully created and saved!
                    </p>
                    
                    <div style="margin: 30px 0;">
                        <button id="createNewBtn" class="btn btn-primary" style="background: #007bff; color: white; border: none; padding: 15px 30px; font-size: 1.1rem; border-radius: 8px; cursor: pointer; margin-right: 15px;">
                            Create New Lesson Plan
                        </button>
                        <button id="viewFormBtn" class="btn btn-secondary" style="background: #6c757d; color: white; border: none; padding: 15px 30px; font-size: 1.1rem; border-radius: 8px; cursor: pointer;">
                            View Form Data
                        </button>
                    </div>
                    
                    <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
                        <p style="color: #6c757d; font-size: 0.9rem;">Thank you for using our lesson plan creator!</p>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML = successPageHTML;
        
        // Add event listeners for the new buttons
        document.getElementById('createNewBtn').addEventListener('click', () => {
            window.location.reload();
        });
        
        document.getElementById('viewFormBtn').addEventListener('click', () => {
            this.showFormData();
        });
    }

    showFormData() {
        const formData = this.getFormData();
        let dataHTML = '<div style="text-align: left; max-width: 800px; margin: 0 auto;">';
        dataHTML += '<h3 style="color: #333; margin-bottom: 20px;">Lesson Plan Details</h3>';
        
        Object.entries(formData).forEach(([key, value]) => {
            if (value) {
                const label = this.getFieldLabel(key);
                dataHTML += `<p style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 5px;"><strong>${label}:</strong> ${value}</p>`;
            }
        });
        
        dataHTML += '<button onclick="history.back()" style="margin-top: 20px; padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">Back to Success Page</button>';
        dataHTML += '</div>';
        
        const container = document.querySelector('.container');
        container.innerHTML = dataHTML;
    }

    getFormData() {
        const formData = {};
        const formElements = this.form.querySelectorAll('input, select');
        
        formElements.forEach(element => {
            if (element.name || element.id) {
                const key = element.name || element.id;
                formData[key] = element.value;
            }
        });
        
        return formData;
    }

    getFieldLabel(fieldName) {
        const labelMap = {
            'hourCodes': 'Hour',
            'minCodes': 'Minutes',
            'school': 'School',
            'teacherName': 'Teacher Name',
            'date': 'Date',
            'subject': 'Subject',
            'classes': 'Class',
            'streams': 'Stream',
            'period': 'Period',
            'femaleReg': 'Female Registered',
            'maleReg': 'Male Registered',
            'femalePres': 'Female Present',
            'malePres': 'Male Present',
            'specificLesson': 'Specific Lesson',
            'tlmaterials': 'Teaching Materials',
            'wrdImp1': 'Word/Improvement 1',
            'wrdImp2': 'Word/Improvement 2'
        };
        
        return labelMap[fieldName] || fieldName;
    }

    // Auto-save functionality
    saveFormData() {
        const formData = {};
        const formElements = this.form.querySelectorAll('input, select');
        
        formElements.forEach(element => {
            if (element.name || element.id) {
                const key = element.name || element.id;
                formData[key] = element.value;
            }
        });
        
        const dataToSave = {
            formData: formData,
            timestamp: new Date().toISOString(),
            currentStep: this.currentStep
        };
        
        try {
            localStorage.setItem('lessonPlanFormData', JSON.stringify(dataToSave));
        } catch (error) {
            console.error('Error saving form data:', error);
        }
    }

    loadSavedData() {
        try {
            const savedData = localStorage.getItem('lessonPlanFormData');
            
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                const { formData, timestamp } = parsedData;
                
                // Check if saved data is not too old (7 days)
                const savedDate = new Date(timestamp);
                const currentDate = new Date();
                const daysDifference = (currentDate - savedDate) / (1000 * 60 * 60 * 24);
                
                if (daysDifference > 7) {
                    this.clearSavedData();
                    return;
                }
                
                // Restore form data
                Object.keys(formData).forEach(key => {
                    const element = document.getElementById(key) || document.querySelector(`[name="${key}"]`);
                    if (element && formData[key]) {
                        element.value = formData[key];
                        element.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                });
                
                this.showDataLoadedNotification();
            }
        } catch (error) {
            console.error('Error loading saved data:', error);
            this.clearSavedData();
        }
    }

    clearSavedData() {
        try {
            localStorage.removeItem('lessonPlanFormData');
        } catch (error) {
            console.error('Error clearing saved data:', error);
        }
    }

    showDataLoadedNotification() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 14px;
            animation: slideIn 0.3s ease;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span>✓</span>
                <span>Previous data restored successfully!</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: 10px;">×</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
}

// Auto-focus functionality
function setupAutoFocusNext() {
    const formElements = document.querySelectorAll('#lessonPlanForm input, #lessonPlanForm select');
    
    formElements.forEach((element, index) => {
        let typingTimer;
        let isUserTyping = false;
        
        if (element.type === 'text' || element.type === 'number' || element.type === 'date') {
            element.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    clearTimeout(typingTimer);
                    isUserTyping = false;
                    moveToNextField(element, formElements, index);
                    return;
                }
                
                const navigationKeys = ['Tab', 'Shift', 'Ctrl', 'Alt', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
                if (!navigationKeys.includes(e.key)) {
                    isUserTyping = true;
                }
            });
            
            element.addEventListener('input', function() {
                const currentValue = element.value.trim();
                clearTimeout(typingTimer);
                
                if (currentValue.length === 0) {
                    isUserTyping = false;
                    return;
                }
                
                const isLikelyComplete = checkIfEntryComplete(element, currentValue);
                
                if (isLikelyComplete) {
                    typingTimer = setTimeout(() => {
                        if (element.value.trim() === currentValue && !isUserTyping) {
                            moveToNextField(element, formElements, index);
                        }
                        isUserTyping = false;
                    }, 1500);
                } else {
                    typingTimer = setTimeout(() => {
                        isUserTyping = false;
                    }, 2000);
                }
            });
            
            element.addEventListener('blur', function() {
                clearTimeout(typingTimer);
                isUserTyping = false;
            });
        }
        
        if (element.tagName === 'SELECT') {
            element.addEventListener('change', function() {
                moveToNextField(element, formElements, index);
            });
        }
    });
}

function checkIfEntryComplete(element, value) {
    const fieldType = element.type;
    const fieldName = element.name || element.id;
    
    if (fieldType === 'date') {
        return value.length >= 10;
    }
    
    if (fieldType === 'number') {
        const num = parseInt(value);
        return !isNaN(num) && num >= 0;
    }
    
    if (fieldType === 'text') {
        if (fieldName.includes('Name') || fieldName.includes('name')) {
            return value.length >= 2 && /[a-zA-Z]/.test(value);
        }
        
        if (fieldName.includes('school')) {
            return value.length >= 3 && /[a-zA-Z]/.test(value);
        }
        
        if (fieldName.includes('material') || fieldName.includes('activity') || fieldName.includes('specific')) {
            return value.length >= 5 && /[a-zA-Z]/.test(value);
        }
        
        return value.length >= 2;
    }
    
    return false;
}

function moveToNextField(currentElement, allElements, currentIndex) {
    if (currentElement.value.trim() !== '') {
        for (let i = currentIndex + 1; i < allElements.length; i++) {
            const nextElement = allElements[i];
            const currentStep = document.querySelector('.step.active');
            
            if (currentStep && currentStep.contains(nextElement)) {
                nextElement.focus();
                break;
            }
        }
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create global instance
    window.lessonPlanFormInstance = new LessonPlanForm();
    
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    const dateField = document.getElementById('date');
    if (dateField) {
        dateField.value = today;
    }
    
    // Setup auto-focus and auto-save
    setupAutoFocusNext();
    
    // Setup auto-save functionality
    const form = document.getElementById('lessonPlanForm');
    if (form) {
        // Load saved data
        window.lessonPlanFormInstance.loadSavedData();
        
        // Save data on input/change
        form.addEventListener('input', () => window.lessonPlanFormInstance.saveFormData());
        form.addEventListener('change', () => window.lessonPlanFormInstance.saveFormData());
    }
});
     

lessonplanSubmit.addEventListener('click', function (mySb) {
    mySb.preventDefault();
    
    if (!validateFields()) {
        // Modern alert styling
        showModernAlert("Please fill all required fields before submitting your lesson plan.", "warning");
        return;
    }
    
    updateContent(); 
    const container = document.querySelector('.container');
    
   
    const formElements = container.querySelectorAll('form, .form-section, .input-group, .form-container, .lesson-form');
    formElements.forEach(element => {
        element.style.display = 'none';
    });
    
    
    const childDivs = container.querySelectorAll('div');
    childDivs.forEach(div => {
        
        if (!div.id.includes('lessonTemp') && 
            !div.classList.contains('lesson-content') && 
            !div.classList.contains('lesson-template') &&
            !div.innerHTML.includes('lesson plan content')) {
            
            
            if (div.querySelector('input, select, textarea, button:not(.action-button)') || 
                div.classList.contains('form-group') ||
                div.classList.contains('input-section')) {
                div.style.display = 'none';
            }
        }
    });
    
    
    const existingButtons = container.querySelectorAll('.action-button, #downloadPdfBtn');
    existingButtons.forEach(btn => btn.remove());
    
    
    const messageContainer = document.createElement("div");
    messageContainer.className = "success-message-container";
    messageContainer.innerHTML = `
        <div class="success-icon">✅</div>
        <h2>Lesson Plan Created Successfully!</h2>
        <p>Your lesson plan has been generated and is ready for use. You can download it as a PDF or create a new lesson plan.</p>
    `;
    
    
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    
   
    const downloadBtn = document.createElement("button");
    downloadBtn.id = "downloadPdfBtn";
    downloadBtn.className = "action-button primary-btn";
    downloadBtn.innerHTML = `
        <span class="btn-icon">📥</span>
        Download PDF
    `;
    
    
    const backBtn = document.createElement("button");
    backBtn.id = "backBtn";
    backBtn.className = "action-button secondary-btn";
    backBtn.innerHTML = `
        <span class="btn-icon">🔙</span>
        Back to Saved Data
    `;
    
   
    const newLessonBtn = document.createElement("button");
    newLessonBtn.id = "newLessonBtn";
    newLessonBtn.className = "action-button tertiary-btn";
    newLessonBtn.innerHTML = `
        <span class="btn-icon">➕</span>
        Create New Lesson Plan
    `;
    
    
    buttonContainer.appendChild(downloadBtn);
    buttonContainer.appendChild(backBtn);
    buttonContainer.appendChild(newLessonBtn);
    
    
    container.appendChild(messageContainer);
    container.appendChild(buttonContainer);
    
    
    downloadBtn.addEventListener('click', function() {
        // Ensure lesson content is visible before downloading
        const lessonContent = document.querySelector('#lessonTemp, .lesson-content, .lesson-template');
        if (lessonContent) {
            lessonContent.style.display = 'block';
            lessonContent.style.visibility = 'visible';
        }
        downloadDocument();
    });
    
    backBtn.addEventListener('click', function() {
       
      if (typeof resetLessonPlanForm === 'function') {
            resetLessonPlanForm();
        } else {
            // Fallback: reload the page or show form
            location.reload();
        }
        
        showModernAlert("Returned to saved data view", "info");
    });
    
    newLessonBtn.addEventListener('click', function() {
        // Reset form or redirect to new lesson plan creation
        if (typeof resetLessonPlanForm === 'function') {
            resetLessonPlanForm();
        } else {
            // Fallback: reload the page or show form
            location.reload();
        }
        showModernAlert("Starting new lesson plan creation", "success");
    });
    
    
    addModernStyles();
    
    
    showModernAlert("Lesson plan generated successfully!", "success");
});


function showModernAlert(message, type = "info") {
    // Remove existing alerts
    const existingAlert = document.querySelector('.modern-alert');
    if (existingAlert) existingAlert.remove();
    
    const alert = document.createElement('div');
    alert.className = `modern-alert alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <span class="alert-icon">${getAlertIcon(type)}</span>
            <span class="alert-message">${message}</span>
        </div>
    `;
    
    document.body.appendChild(alert);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 3000);
}


function getAlertIcon(type) {
    const icons = {
        success: "✅",
        warning: "⚠️",
        error: "❌",
        info: "ℹ️"
    };
    return icons[type] || icons.info;
}

// ✅ Function to add modern styles
function addModernStyles() {
    // Check if styles already exist
    if (document.querySelector('#modernLessonPlanStyles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'modernLessonPlanStyles';
    styles.textContent = `


.success-message-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 50px 40px;
    border-radius: 20px;
    text-align: center;
    margin: 20px auto;
    max-width: 700px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 8px 20px rgba(102, 126, 234, 0.4);
    animation: slideIn 0.8s ease-out;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
}

.success-message-container::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: shimmer 3s infinite;
    pointer-events: none;
}

.success-icon {
    font-size: 4rem;
    margin-bottom: 25px;
    animation: bounce 0.8s ease-in-out;
    text-shadow: 0 4px 8px rgba(0,0,0,0.3);
    filter: drop-shadow(0 0 20px rgba(255,255,255,0.5));
}

.success-message-container h2 {
    margin: 0 0 20px 0;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    background: linear-gradient(45deg, #ffffff, #f8f9ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.success-message-container p {
    margin: 0;
    font-size: 1.2rem;
    opacity: 0.95;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.button-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: 40px auto;
    flex-wrap: wrap;
    max-width: 600px;
    padding:  20px;
}

.action-button {
    padding: 32px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    align-items: center;
    gap: 12px;
    width: 220px;
    height: 56px;
    justify-content: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    letter-spacing: 0.5px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    backdrop-filter: blur(10px);
}

.action-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.6s;
}

.action-button:hover::before {
    left: 100%;
}

.primary-btn {
    background: linear-gradient(135deg, #28a745, #20c997, #17a2b8);
    color: white;
    box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
    border: 2px solid rgba(255,255,255,0.2);
}

.primary-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 15px 35px rgba(40, 167, 69, 0.5);
    background: linear-gradient(135deg, #34ce57, #28d1a0, #20b2d1);
}

.primary-btn:active {
    transform: translateY(-2px) scale(1.02);
}

.secondary-btn {
    background: linear-gradient(135deg, #6c757d, #5a6268, #495057);
    color: white;
    box-shadow: 0 8px 25px rgba(108, 117, 125, 0.4);
    border: 2px solid rgba(255,255,255,0.2);
}

.secondary-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 15px 35px rgba(108, 117, 125, 0.5);
    background: linear-gradient(135deg, #7c858d, #6a7278, #595f67);
}

.secondary-btn:active {
    transform: translateY(-2px) scale(1.02);
}

.tertiary-btn {
    background: linear-gradient(135deg, #17a2b8, #138496, #0f6674);
    color: white;
    box-shadow: 0 8px 25px rgba(23, 162, 184, 0.4);
    border: 2px solid rgba(255,255,255,0.2);
}

.tertiary-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 15px 35px rgba(23, 162, 184, 0.5);
    background: linear-gradient(135deg, #1fb5d3, #17a2b8, #138496);
}

.tertiary-btn:active {
    transform: translateY(-2px) scale(1.02);
}

.btn-icon {
    font-size: 1.4rem;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

.modern-alert {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 10000;
    min-width: 350px;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    animation: slideInRight 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255,255,255,0.2);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.alert-success {
    background: linear-gradient(135deg, #28a745, #20c997);
    color: white;
    box-shadow: 0 10px 30px rgba(40, 167, 69, 0.3);
}

.alert-warning {
    background: linear-gradient(135deg, #ffc107, #e0a800);
    color: #212529;
    box-shadow: 0 10px 30px rgba(255, 193, 7, 0.3);
}

.alert-error {
    background: linear-gradient(135deg, #dc3545, #c82333);
    color: white;
    box-shadow: 0 10px 30px rgba(220, 53, 69, 0.3);
}

.alert-info {
    background: linear-gradient(135deg, #17a2b8, #138496);
    color: white;
    box-shadow: 0 10px 30px rgba(23, 162, 184, 0.3);
}

.alert-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.alert-icon {
    font-size: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

.alert-message {
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.4;
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

/* Enhanced Animations */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(50px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-15px);
    }
    60% {
        transform: translateY(-8px);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(150px) scale(0.8);
    }
    to {
        opacity: 1;
        transform: translateX(0) scale(1);
    }
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%) translateY(-100%) rotate(30deg);
    }
    100% {
        transform: translateX(100%) translateY(100%) rotate(30deg);
    }
}

/* Ultra Responsive Design */
@media (max-width: 1200px) {
    .success-message-container {
        margin: 15px;
        padding: 40px 30px;
    }
    
    .button-container {
        gap: 15px;
        margin: 30px auto;
    }
    
    .action-button {
        width: 200px;
        height: 52px;
        padding: 14px 28px;
    }
}

@media (max-width: 768px) {
    .success-message-container {
        margin: 10px;
        padding: 35px 25px;
        border-radius: 15px;
    }
    
    .success-message-container h2 {
        font-size: 2rem;
        margin-bottom: 15px;
    }
    
    .success-message-container p {
        font-size: 1.1rem;
    }
    
    .success-icon {
        font-size: 3rem;
        margin-bottom: 20px;
    }
    
    .button-container {
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin: 25px auto;
    }
    
    .action-button {
        width: 280px;
        height: 52px;
        max-width: 320px;
        min-width: auto;
        padding: 16px 24px;
        font-size: 1rem;
    }
    
    .modern-alert {
        right: 15px;
        left: 15px;
        min-width: auto;
        top: 20px;
    }
}

@media (max-width: 480px) {
    .success-message-container {
        margin: 5px;
        padding: 30px 20px;
    }
    
    .success-message-container h2 {
        font-size: 1.8rem;
    }
    
    .success-message-container p {
        font-size: 1rem;
    }
    
    .success-icon {
        font-size: 2.5rem;
    }
    
    .action-button {
        width: 260px;
        height: 50px;
        padding: 14px 20px;
        font-size: 0.95rem;
        gap: 10px;
    }
    
    .btn-icon {
        font-size: 1.2rem;
    }
    
    .modern-alert {
        padding: 15px;
        right: 10px;
        left: 10px;
    }
    
    .alert-message {
        font-size: 1rem;
    }
}

@media (max-width: 320px) {
    .success-message-container {
        padding: 25px 15px;
    }
    
    .success-message-container h2 {
        font-size: 1.6rem;
    }
    
    .action-button {
        width: 240px;
        height: 48px;
        padding: 12px 16px;
        font-size: 0.9rem;
    }
}

/* High DPI and Retina Display Support */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
    .success-message-container {
        box-shadow: 0 20px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(102, 126, 234, 0.3);
    }
    
    .action-button {
        box-shadow: 0 6px 20px rgba(0,0,0,0.12);
    }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    .success-message-container {
        background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
        border: 1px solid rgba(255,255,255,0.15);
    }
    
    .alert-warning {
        color: #1a202c;
    }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
    .success-message-container,
    .action-button,
    .modern-alert {
        animation: none;
    }
    
    .action-button {
        transition: none;
    }
    
    .success-icon {
        animation: none;
    }
}
    `;
    
    document.head.appendChild(styles);
}


function validateFields() {
    const hourCodes = document.getElementById("hourCodes").value;
    const minCodes = document.getElementById("minCodes").value;
    const school = document.getElementById("school").value;
    const teacherName = document.getElementById("teacherName").value;
    const date = document.getElementById("date").value;
    const subject = document.getElementById("subject").value;
    const classes = document.getElementById("classes").value;
    const streams = document.getElementById("streams").value;
    const period = document.getElementById("period").value;
    const femaleReg = document.getElementById("femaleReg").value;
    const maleReg = document.getElementById("maleReg").value;
    const femalePres = document.getElementById("femalePres").value;
    const malePres = document.getElementById("malePres").value;
    const specificLesson = document.getElementById("specificLesson").value;
    const tlmaterials = document.getElementById("tlmaterials").value;
    const wrdImp1 = document.getElementById("wrdImp1").value;
    const wrdImp2 = document.getElementById("wrdImp2").value;

    if (
        !hourCodes || !minCodes || !school || !teacherName || !date || !subject || !classes || 
        !streams || !period || !femaleReg || !maleReg || !femalePres || !malePres || 
        !specificLesson || !tlmaterials || !wrdImp1 || !wrdImp2
    ) {
        return false; 
    }
    return true; 
}


function userLoadd() {
    document.getElementById("wordToshow").innerText="Thanks!  Your lesson plan will download shortly, please be patient";
    document.getElementById("videoDiv").style.display="block";
    document.getElementById("adDiv").style.display="none";
    document.getElementById("refreshBtn").style.display="block";
    document.getElementById('downloadPdfBtn').style.display="block";
    document.getElementById('downloadPdfBtn').innerText="download lesson plan again";
    document.getElementById("gotoEdit").style.display="none";
}
 function downloadDocument() {
const lessonTemp = document.getElementById('lessonTemp');
    let subjectLook = document.getElementById('subject')?.value || "Downloaded";
    let activityLook = document.getElementById('specificLesson')?.value || "Lesson Plan";
    let defaultName1 = `${subjectLook} ${activityLook}`;
    let defaultName = defaultName1.trim().replace(/\s+/g, "_");
    
    // Create modal for document name input
    showDocumentNameModal(defaultName1, (documentName) => {
        const finalName = documentName.trim() === "" ? defaultName : documentName.trim().replace(/\s+/g, "_"); 

html2pdf()
  .from(lessonTemp)
  .set({
    filename: `${finalName}.pdf`,
    html2canvas: {
      scale: 4,
      useCORS: true
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  })
  .outputPdf('blob')
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${finalName}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  });
    }); 
document.getElementById('downloadPdfBtn').style.display="none";
userLoadd()

};
     
 function showDocumentNameModal(defaultName, callback) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.document-name-modal');
    if (existingModal) existingModal.remove();
    
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'document-name-modal-overlay';
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'document-name-modal';
    modal.innerHTML = `
        <div class="modal-header">
            <h3>📄 Save Lesson Plan</h3>
        </div>
        <div class="modal-body">
            <label for="documentNameInput">WEKA JINA LA LESSON PLAN (Mfano: Mr. nmgai subject topic 1)</label>
            <input type="text" id="documentNameInput" class="document-name-input" value="${defaultName}" placeholder="Enter document name...">
            <div class="input-hint">Jina litabadilishwa kuwa format ya faili (spaces → underscores)</div>
        </div>
        <div class="modal-footer">
            <button class="modal-btn cancel-btn" onclick="closeDocumentNameModal()">Cancel</button>
            <button class="modal-btn confirm-btn" onclick="confirmDocumentName()">OK - ENDELEA</button>
        </div>
    `;
    
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
    
    // Focus on input and select text
    setTimeout(() => {
        const input = document.getElementById('documentNameInput');
        input.focus();
        input.select();
    }, 100);
    
    // Store callback for later use
    window.documentNameCallback = callback;
    
    // Handle Enter key
    document.getElementById('documentNameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            confirmDocumentName();
        }
    });
    
    // Handle Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDocumentNameModal();
        }
    });
    
    // Add modal styles
    addDocumentNameModalStyles();
}

function confirmDocumentName() {
    const input = document.getElementById('documentNameInput');
    const documentName = input.value || input.placeholder;
    
    // Call the callback with the document name
    if (window.documentNameCallback) {
        window.documentNameCallback(documentName);
        window.documentNameCallback = null;
    }
    
    closeDocumentNameModal();
}

function closeDocumentNameModal() {
    const modal = document.querySelector('.document-name-modal-overlay');
    if (modal) {
        modal.remove();
    }
    window.documentNameCallback = null;
}

function addDocumentNameModalStyles() {
    // Check if styles already exist
    if (document.querySelector('#documentNameModalStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'documentNameModalStyles';
    style.textContent = `
        .document-name-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            backdrop-filter: blur(3px);
        }
        
        .document-name-modal {
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            width: 90%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
            animation: modalSlideIn 0.3s ease-out;
        }
        
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .modal-header {
            padding: 20px 24px 16px;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .modal-header h3 {
            margin: 0;
            color: #1f2937;
            font-size: 1.25rem;
            font-weight: 600;
        }
        
        .modal-body {
            padding: 24px;
        }
        
        .modal-body label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #374151;
            font-size: 0.95rem;
        }
        
        .document-name-input {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #d1d5db;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.2s ease;
            box-sizing: border-box;
        }
        
        .document-name-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .input-hint {
            margin-top: 8px;
            font-size: 0.875rem;
            color: #6b7280;
            font-style: italic;
        }
        
        .modal-footer {
            padding: 16px 24px 24px;
            display: flex;
            gap: 12px;
            justify-content: flex-end;
        }
        
        .modal-btn {
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            font-size: 0.95rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            min-width: 80px;
        }
        
        .cancel-btn {
            background-color: #f3f4f6;
            color: #374151;
        }
        
        .cancel-btn:hover {
            background-color: #e5e7eb;
        }
        
        .confirm-btn {
            background-color: #3b82f6;
            color: white;
        }
        
        .confirm-btn:hover {
            background-color: #2563eb;
        }
        
        .modal-btn:active {
            transform: translateY(1px);
        }
        
        /* Mobile responsive */
        @media (max-width: 640px) {
            .document-name-modal {
                width: 95%;
                margin: 20px;
            }
            
            .modal-header, .modal-body, .modal-footer {
                padding-left: 16px;
                padding-right: 16px;
            }
            
            .modal-footer {
                flex-direction: column;
            }
            
            .modal-btn {
                width: 100%;
            }
        }
    `;
    
    document.head.appendChild(style);
}    
