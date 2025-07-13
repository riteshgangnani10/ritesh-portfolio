# Resume Setup Guide

## Issue
The resume file `public/Ritesh_Gangnani_Resume.pdf` keeps getting replaced with a blank placeholder.

## Solution

### Step 1: Add Your Resume
1. **Save your actual resume** as `public/Ritesh_Gangnani_Resume.pdf`
2. **Make sure it's your real resume** (not the 503-byte placeholder)

### Step 2: Protect the File
To prevent the file from being overwritten:

```bash
# Make the file read-only after adding your resume
chmod 444 public/Ritesh_Gangnani_Resume.pdf
```

### Step 3: Verify the Setup
```bash
# Check file size (should be much larger than 503 bytes)
ls -la public/Ritesh_Gangnani_Resume.pdf

# Check file contents (should show your actual resume)
file public/Ritesh_Gangnani_Resume.pdf
```

### Step 4: Alternative Approach
If the file keeps getting overwritten, you can:

1. **Rename your resume** to something unique like `public/Ritesh_Resume_Final.pdf`
2. **Update the portfolio code** to point to the new filename

To update the code:
```tsx
// In src/Portfolio.tsx, find this line:
href="/Ritesh_Gangnani_Resume.pdf"
download="Ritesh_Gangnani_Resume.pdf"

// Change it to:
href="/Ritesh_Resume_Final.pdf"
download="Ritesh_Resume_Final.pdf"
```

### Step 5: Build Protection
Add this to your `.gitignore` if you want to prevent accidental commits:
```
# Protect resume file
public/Ritesh_Gangnani_Resume.pdf
```

## Quick Fix Command
```bash
# Remove placeholder and add your resume
rm public/Ritesh_Gangnani_Resume.pdf
cp /path/to/your/actual/resume.pdf public/Ritesh_Gangnani_Resume.pdf
chmod 444 public/Ritesh_Gangnani_Resume.pdf
```

## Verification
After adding your resume, the file should be:
- ✅ Much larger than 503 bytes
- ✅ Contain your actual resume content
- ✅ Protected from overwriting (if you used chmod 444) 