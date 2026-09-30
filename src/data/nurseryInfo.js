export const NURSERY_INFO = {
  name: "Flowering Pot",
  tagline: "Bring More Green Into Your Space",
  subheadline: "Discover beautiful indoor and outdoor plants from Flowering Pot.",
  owner: "Nikhil Kanojiya",
  phone: "9716574035",
  whatsappNumber: "9716574035",
  whatsappCountryCode: "91",
  formattedPhone: "+91 97165 74035",
  address: "R.k Puram, Sector 5, New Delhi",
  fullAddress: "Flowering Pot Nursery, Sector 5, R.K. Puram, New Delhi, Delhi 110022",
  openingHours: "9:00 AM to 7:00 PM (All 7 Days)",
  deliveryAreas: "New Delhi & surrounding NCR regions",
  instagramUrl: "https://instagram.com/floweringpot.delhi",
  yearsExperience: "3+ years",
  establishedYear: "2021",
  email: "contact@floweringpot.in",
  googleMapsUrl: "https://maps.google.com/?q=R.k+Puram+Sector+5+New+Delhi",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.658235284144!2d77.16843477817454!3d28.572348578663673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d9d99723933%3A0x6b610c3f5926ec03!2sSector%205%2C%20Rama%20Krishna%20Puram%2C%20New%20Delhi%2C%20Delhi%20110022!5e0!3m2!1sen!2sin!4v1711800000000!5m2!1sen!2sin"
};

/**
 * Generate a direct WhatsApp enquiry URL
 * @param {string} plantName - Name of the plant (optional)
 * @param {boolean} isCustomMessage - If custom text is passed
 * @param {string} customText - Custom message
 */
export const getWhatsAppUrl = (plantName, isCustomMessage = false, customText = "") => {
  let message = "";
  if (isCustomMessage && customText) {
    message = customText;
  } else if (plantName) {
    message = `Hi, I'm interested in the ${plantName} listed on your website. Is it currently available?`;
  } else {
    message = `Hi Flowering Pot, I would like to enquire about plants and nursery services at your R.K. Puram nursery.`;
  }
  return `https://wa.me/${NURSERY_INFO.whatsappCountryCode}${NURSERY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const getCallUrl = () => `tel:${NURSERY_INFO.phone}`;
