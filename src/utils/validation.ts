/**
 * Utility functions for validating and sanitizing user input
 */

/**
 * Sanitizes a social media username by removing @ symbols and trimming whitespace
 * @param username - The username to sanitize
 * @returns Sanitized username
 */
export function sanitizeUsername(username: string): string {
  if (!username) return '';
  
  return username
    .replace(/^@+/, '') // Remove leading @ symbols
    .trim() // Remove whitespace
    .toLowerCase(); // Convert to lowercase
}

/**
 * Validates a social media username format
 * @param username - The username to validate
 * @returns True if valid, false otherwise
 */
export function isValidUsername(username: string): boolean {
  if (!username) return false;
  
  const sanitized = sanitizeUsername(username);
  
  // Check if username contains only valid characters (alphanumeric, underscores, hyphens, dots)
  const validPattern = /^[a-zA-Z0-9._-]+$/;
  
  return validPattern.test(sanitized) && sanitized.length > 0 && sanitized.length <= 50;
}

/**
 * Validates a Twitter username specifically
 * @param username - The username to validate
 * @returns True if valid, false otherwise
 */
export function isValidTwitterUsername(username: string): boolean {
  if (!username) return false;
  
  const sanitized = sanitizeUsername(username);
  
  // Twitter usernames: 1-15 characters, alphanumeric and underscores only
  const twitterPattern = /^[a-zA-Z0-9_]{1,15}$/;
  
  return twitterPattern.test(sanitized);
}

/**
 * Validates a LinkedIn username (company or personal)
 * @param username - The username to validate
 * @returns True if valid, false otherwise
 */
export function isValidLinkedInUsername(username: string): boolean {
  if (!username) return false;
  
  const sanitized = sanitizeUsername(username);
  
  // LinkedIn usernames: 3-100 characters, alphanumeric, hyphens, underscores
  const linkedinPattern = /^[a-zA-Z0-9_-]{3,100}$/;
  
  return linkedinPattern.test(sanitized);
}

/**
 * Validates a Facebook username
 * @param username - The username to validate
 * @returns True if valid, false otherwise
 */
export function isValidFacebookUsername(username: string): boolean {
  if (!username) return false;
  
  const sanitized = sanitizeUsername(username);
  
  // Facebook usernames: 5-50 characters, alphanumeric and periods only
  const facebookPattern = /^[a-zA-Z0-9.]{5,50}$/;
  
  return facebookPattern.test(sanitized);
}

/**
 * Gets a safe username for use in URLs and API calls
 * @param username - The username to make safe
 * @returns Safe username or empty string if invalid
 */
export function getSafeUsername(username: string): string {
  if (!username) return '';
  
  const sanitized = sanitizeUsername(username);
  
  if (!isValidUsername(sanitized)) {
    console.warn(`Invalid username format: ${username}`);
    return '';
  }
  
  return sanitized;
}

/**
 * Parses a comma-separated string of usernames and returns valid ones
 * @param usernamesString - Comma-separated string of usernames
 * @param validator - Function to validate each username
 * @returns Array of valid, sanitized usernames
 */
export function parseUsernames(
  usernamesString: string | undefined, 
  validator: (username: string) => boolean
): string[] {
  if (!usernamesString || usernamesString.trim() === '') {
    return [];
  }
  
  return usernamesString
    .split(',')
    .map(username => getSafeUsername(username.trim()))
    .filter(username => username && validator(username))
    .filter((username, index, array) => array.indexOf(username) === index); // Remove duplicates
}
