# Setup Instructions

## 🚨 Action Required - Please Complete These Steps

### 1. 📅 **Fix Calendly Link**

**Current Issue**: The "Schedule a Call" button links to `https://calendly.com/riteshgangnani` which shows "invalid link" because this username doesn't exist yet.

**To Fix**:
1. **Create your Calendly account**:
   - Go to [calendly.com](https://calendly.com)
   - Sign up with your email: `ritesh.gangnani@gmail.com`
   - Choose a username (e.g., `ritesh-gangnani`, `riteshgangnani-ai`, etc.)

2. **Update the portfolio**:
   - Open `src/Portfolio.tsx`
   - Find line with: `href="https://calendly.com/riteshgangnani"`
   - Replace with your actual Calendly URL: `href="https://calendly.com/YOUR-USERNAME"`

**Example**:
```typescript
// Change this:
href="https://calendly.com/riteshgangnani"

// To this (with your actual username):
href="https://calendly.com/ritesh-gangnani-ai"
```

### 2. 📄 **Add Your Resume**

**Current Status**: I've created a placeholder PDF file at `public/Ritesh_Gangnani_Resume.pdf`

**To Fix**:
1. **Replace the placeholder**:
   - Delete the current file: `public/Ritesh_Gangnani_Resume.pdf`
   - Add your actual PDF resume with the same name: `public/Ritesh_Gangnani_Resume.pdf`

2. **Alternative naming** (if you prefer a different name):
   - Add your resume as `public/Your_Resume_Name.pdf`
   - Update the link in `src/Portfolio.tsx`:
     ```typescript
     // Find this line:
     href="/Ritesh_Gangnani_Resume.pdf"
     
     // Change to:
     href="/Your_Resume_Name.pdf"
     ```

### 3. ✅ **What's Already Fixed**

✅ **Email Button**: Now works with pre-filled subject and body  
✅ **Title**: Changed to "AI Workflow Architect"  
✅ **Tagline**: Updated to "I build and automate AI workflows from ideation to production at scale"  
✅ **Resume Download**: Set up with proper download attribute  

### 4. 🧪 **Test Everything**

After making the changes above:

1. **Test Calendly**:
   ```bash
   # Start the dev server
   npm start
   
   # Click "Schedule a Call" button
   # Should open your Calendly page in new tab
   ```

2. **Test Email**:
   ```bash
   # Click "Email Me" button
   # Should open email client with pre-filled subject/body
   ```

3. **Test Resume**:
   ```bash
   # Click "Download Resume" button
   # Should download your PDF resume
   ```

### 5. 🚀 **Quick Setup Commands**

```bash
# 1. Update Calendly link (after creating account)
# Edit src/Portfolio.tsx and replace the Calendly URL

# 2. Add your resume
# Replace public/Ritesh_Gangnani_Resume.pdf with your actual resume

# 3. Test everything
npm start

# 4. Build for production
npm run build

# 5. Deploy
./deploy.sh
```

### 6. 📝 **Sample Calendly Usernames**

Choose one of these or create your own:
- `ritesh-gangnani`
- `riteshgangnani-ai`
- `ritesh-ai-expert`
- `riteshgangnani-ml`

### 7. 🎯 **Current Portfolio Status**

✅ **Performance**: Fixed mouse movement refresh issues  
✅ **Design**: Modern, professional layout  
✅ **Content**: Focused on AI workflow automation  
✅ **Contact**: Email with pre-filled template  
⚠️ **Calendly**: Needs your actual username  
⚠️ **Resume**: Needs your actual PDF file  

---

## 🔧 **Need Help?**

If you encounter any issues:

1. **Calendly not working**: Make sure you've created the account and updated the URL
2. **Resume not downloading**: Check the file exists in the `public` folder
3. **Build errors**: Run `npm run build` to see any issues
4. **Email not opening**: Check if you have a default email client set up

**Once you complete steps 1 & 2 above, your portfolio will be 100% functional! 🚀** 