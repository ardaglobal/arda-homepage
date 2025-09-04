# Environment Variables Setup

## Google Forms Configuration

To set up the subscription form, you need to configure these environment variables:

### Required Variables

Create a `.env.local` file in the root directory with these values:

```bash
# Google Forms Entry ID
# This is the entry ID for your email field
# To find: Right-click your form → View Page Source → Search for "entry."
NEXT_PUBLIC_GOOGLE_FORM_ENTRY_ID=entry.1234567890

# Google Forms URL
# This is the formResponse URL for your Google Form
NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/1234567890/formResponse
```

### For Production/GitHub Pages

Add these same variables to your GitHub repository secrets:
1. Go to your repository → Settings → Secrets and variables → Actions
2. Add the following repository secrets:
   - `NEXT_PUBLIC_GOOGLE_FORM_ENTRY_ID`
   - `NEXT_PUBLIC_GOOGLE_FORM_URL`

### How to Find Your Values

1. **Entry ID**: 
   - Open your Google Form
   - Right-click → "View Page Source"
   - Search for "entry." (Ctrl/Cmd + F)
   - Look for something like `entry.1234567890`

2. **Form URL**:
   - Take your form's edit URL: `https://docs.google.com/forms/d/FORM_ID/edit`
   - Replace `/edit` with `/formResponse`
   - Result: `https://docs.google.com/forms/d/e/FORM_ID/formResponse`

### Security Benefits

- ✅ Form URLs are not exposed in source code
- ✅ Prevents potential DoS attacks on your form
- ✅ Allows easy form switching without code changes
- ✅ Keeps sensitive configuration secure
