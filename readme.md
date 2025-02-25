# GestureType - Assistive Communication Tool

## Overview

This project is an assistive communication tool designed for individuals with vocal and motor impairments such as Parkinson's Disease. The system allows users to select words and construct sentences using head tilts and gestures, without the need for hands-on interaction. The system also includes an email-sending feature triggered by opening the mouth, enabling users to send constructed messages to a predefined contact.

## Features

- **Head tilt-based word selection**:
  - Tilt left to select the left word
  - Tilt right to select the right word
  - Bow head to select the center word
- **Dynamic word suggestions**:
  - The system provides alternative words every 7 seconds based on context using an AI-powered model leveraging llama-3.1-8b--instant using the powerful capabilities of groq
- **Sentence construction**:
  - Selected words are added to the ongoing sentence, displayed as an overlay.
- **Mouth open detection for message sending**:
  - When the user opens their mouth, the current sentence is automatically sent via email to a predefined recipient.
- **Real-time video feed with overlays**:
  - Displays live video feed with word selection and current sentence overlays.
- **SMTP-based email integration**:
  - Configurable email sending using an SMTP connection.

## Technologies Used

- **Python**
- **OpenCV** (for video processing)
- **MediaPipe** (for face landmark detection)
- **Groq API** (for AI-powered word suggestions)
- **SMTP (email sending functionality)**

## Installation

### 1. Clone the Repository

### 2. Install Dependencies

```bash
pip install -r GestureType\\requirements.txt
```

### 3. Configure the following

#### Email settings

Update the following values in the script:

```python
SMTP_SERVER = "your-smtp-server.com"  # e.g., smtp.gmail.com
SMTP_PORT = 587  # Use 465 for SSL if required
EMAIL_ADDRESS = "your-email@example.com"
EMAIL_PASSWORD = "your-app-password"
RECIPIENT_EMAIL = "recipient@example.com"
```

For Gmail, you must generate an **App Password** instead of using your actual password.

#### Groq_api_key

Make a .env file in GestureType folder and add in your api key using the .env.dist template

### 4. Run the Program

```bash
python GestureType\\app.py
```

## Usage Instructions

1. Start the application and allow camera access.
2. The system will display three words on the screen.
3. **Tilt your head left** to select the left word.
4. **Tilt your head right** to select the right word.
5. **Bow your head down** to select the middle word.
6. The selected word gets added to the ongoing sentence.
7. Words refresh every **7 seconds** based on AI suggestions.
8. **Open your mouth** to send the constructed sentence via email.
9. Close the application by pressing **'q'**.

## Future Enhancements

- **Text-to-Speech (TTS) integration** to vocalize messages.
- **Spreading the functionality to more leisure activities** such as adding Youtube, Spotify, etc. control to not just provide a medium for communication but complete inclusion of such individuals in the mainstream.
- **Web-based UI** for remote monitoring and customization.
- **Multiple recipient selection** with gesture control.
- **Machine learning-based gesture recognition** for expanded controls.
- **Calibrated gestures catered to the individuals using it** to compensate the different mobility concerns in different individuals
