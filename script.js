//  Dynamically shw data
document.querySelectorAll(".tabNameWrapperStyle").forEach((tab) => {
  tab.addEventListener("click", function () {
    const dropDownId = this.getAttribute("data-dropdown");
    console.log("Clicked Tab Text:", dropDownId);

    const dropDown = document.getElementById(dropDownId);
    if (!dropDown) {
      console.error("Dropdown not found for ID:", dropDownId);
      return;
    }

    // Check if the clicked tab is already active
    const isAlreadyActive = dropDown.classList.contains("active");
    console.log("Is Dropdown Already Active:", isAlreadyActive);

    // Close all dropdowns first
    document.querySelectorAll(".dropDownContainer").forEach((container) => {
      container.classList.add("hidden");
      container.classList.remove("active");
    });

    // Remove active class from all tabs
    document.querySelectorAll(".tabNameWrapperStyle").forEach((tabItem) => {
      tabItem.classList.remove("active");
    });

    // Toggle the current tab and dropdown
    if (!isAlreadyActive) {
      this.classList.add("active");
      dropDown.classList.remove("hidden");
      dropDown.classList.add("active");
    }
  });
});
// Set up event listener for menu items in dropdowns
document
  .querySelectorAll(".dropDownContainer")
  .forEach((dropDownContainer, index) => {
    const menuItems = dropDownContainer.querySelectorAll(".menuItem");
    menuItems.forEach((menuItem) => {
      const infoType = menuItem.getAttribute("data-info");
      menuItem.addEventListener("mouseover", () => {
        displayInfo(infoType, index);
      });
    });
  });
const rightSideContent = {
  businessRegistration: {
    title: "Business Registration",
    items: [
      { name: "Private Limited Company", url: "#" },
      { name: "Limited Liability Partnership", url: "#" },
      { name: "One Person Company", url: "#" },
      { name: "Sole Proprietorship", url: "#" },
      { name: "Nidhi Company", url: "#" },
      { name: "Producer Company", url: "#" },
      { name: "Partnership Firm", url: "#" },
      { name: "Startup India Registration", url: "#" },
    ],
  },
  internationalBusiness: {
    title: "International Business Setup",
    items: [
      { name: "US Incorporation", url: "#" },
      { name: "Singapore Incorporation", url: "#" },
      { name: "UK Incorporation", url: "#" },
      { name: "Netherlands Incorporation", url: "#" },
      { name: "Hong Kong Company Incorporation", url: "#" },
      { name: "Dubai Company Incorporation", url: "#" },
    ],
  },
  companynamesearch: {
    title: "Company Name Search",
    items: [
      { name: "Company Name Search", url: "#" },
      { name: "Change Company Name", url: "#" },
    ],
  },
  licensesandRegistrations: {
    title: "Licenses & Registrations",
    items: [
      { name: "Digital Signature Certificate", url: "#" },
      { name: "Udyam Registration", url: "#" },
      { name: "MSME Registration", url: "#" },
      { name: "ISO Certification", url: "#" },
      { name: "FSSAI [Food License]", url: "#" },
      { name: "IEC [Import/Export Code]", url: "#" },
      { name: "Apeda RCMC", url: "#" },
      { name: "Spice Board Registration", url: "#" },
      { name: "FIEO Registration", url: "#" },
      { name: "Legal Metrology", url: "#" },
      { name: "Hallmark Registration", url: "#" },
      { name: "BIS Registration", url: "#" },
      { name: "Liquor License", url: "#" },
      { name: "CLRA Registration & Licensing", url: "#" },
      { name: "AD Code Registration", url: "#" },
      { name: "IRDAI Registration", url: "#" },
      { name: "Drug & Cosmetic License", url: "#" },
      { name: "Customs Clearance", url: "#" },
    ],
  },
  webDevelopment: {
    title: "Web Development",
    items: [{ name: "Web/E-Commerce Website Development", url: "#" }],
  },
  gstandotherindirecttax: {
    title: "GST and Other Indirect Tax",
    items: [
      {
        name: "GST Registration",
        url: "http://127.0.0.1:5500/Gst-registration/gst-registration.html",
      },
      { name: "GST Filing", url: "#" },
      { name: "GST Login Portal", url: "#" },
      { name: "HSN Code Finder", url: "#" },
      { name: "GST Cancellation and Revocation", url: "#" },
      { name: "Indirect Tax", url: "#" },
      { name: "RoDTEP", url: "#" },
    ],
  },
  changesinpvtltdcompany: {
    title: "Changes in Pvt Ltd Company",
    items: [
      { name: "Add a Director", url: "#" },
      { name: "Remove a Director", url: "#" },
      { name: "Increase Authorized Capital", url: "#" },
      { name: "Close the Pvt Ltd Company", url: "#" },
      { name: "Strike off Company", url: "#" },
      { name: "Change Objective/Activity", url: "#" },
      { name: "Change Address", url: "#" },
    ],
  },
  changesinlimitedliabilitypartnership: {
    title: "Changes In Limited Liability Partnership",
    items: [
      { name: "Add Designated Partner", url: "#" },
      { name: "Changes to LLP Agreement", url: "#" },
      { name: "Close to LLP", url: "#" },
    ],
  },
  mandatoryannualfilings: {
    title: "Mandatory Annual Filings",
    items: [
      { name: "Annual Compliance Services", url: "#" },
      { name: "LLP Annual Filings", url: "#" },
      { name: "Secretarial Audit", url: "#" },
    ],
  },
  labourcompliance: {
    title: "Labour Compliance",
    items: [
      { name: "Provident Fund (PF) Registration", url: "#" },
      { name: "ESI Registration", url: "#" },
      { name: "Professional Tax Registration", url: "#" },
      { name: "Shops and Establishments License", url: "#" },
      { name: "Employee Stock Option Plan [ESOP]", url: "#" },
      { name: "POSH Compliance", url: "#" },
      { name: "Labor Law Advisor", url: "#" },
    ],
  },
  accountingandtax: {
    title: "Accounting & Tax",
    items: [
      { name: "Accounting and Book-keeping", url: "#" },
      { name: "TDS Return Filing", url: "#" },
      { name: "Individual Income Tax Filing", url: "#" },
      { name: "Proprietorship Tax Return Filing", url: "#" },
      { name: "ITR for LLP", url: "#" },
      { name: "Corporate Tax", url: "#" },
      { name: "Income Tax Assessment", url: "#" },
      { name: "Income Tax Notice", url: "#" },
      { name: "Virtual CFO", url: "#" },
    ],
  },
  convertyourbusiness: {
    title: "Convert Your Business",
    items: [
      { name: "Proprietorship to Pvt Ltd Company", url: "#" },
      { name: "Compliance Check - Secretarial Audit", url: "#" },
      { name: "Due Diligence", url: "#" },
      { name: "RBI Compliance", url: "#" },
      { name: "Convert Partnership into LLP Company", url: "#" },
      { name: "Convert Private into Public Limited Company", url: "#" },
      { name: "Convert Private into OPC Company", url: "#" },
    ],
  },
  trademark: {
    title: "Trademark",
    items: [
      { name: "Trademark Registration", url: "#" },
      { name: "Trademark Search", url: "#" },
      { name: "Respond to TM Objection", url: "#" },
      { name: "Well Known Trademark", url: "#" },
      { name: "Trademark Watch", url: "#" },
      { name: "Trademark Renewal", url: "#" },
      { name: "Trademark Assignment", url: "#" },
      { name: "USA Trademark", url: "#" },
      { name: "International Trademark", url: "#" },
      { name: "Trademark Class Finder", url: "#" },
    ],
  },
  copyright: {
    title: "Copyright",
    items: [
      { name: "Copyright Registration", url: "#" },
      { name: "Copyright Music", url: "#" },
    ],
  },
  patent: {
    title: "Patent",
    items: [
      { name: "Indian Patent Search", url: "#" },
      { name: "Provisional Patent Application", url: "#" },
      { name: "Patent Registration", url: "#" },
    ],
  },
  infringement: {
    title: "Infringement",
    items: [
      { name: "Copyright Infringement", url: "#" },
      { name: "Patent Infringement", url: "#" },
      { name: "Trademark Infringement", url: "#" },
    ],
  },
  designregistration: {
    title: "Design Registration",
    items: [
      { name: "Logo Design", url: "#" },
      { name: "Design Registration", url: "#" },
    ],
  },
  businesscontracts: {
    title: "Business Contracts",
    items: [
      { name: "Non Disclosure Agreement NDA", url: "#" },
      { name: "Service Level Agreement", url: "#" },
      { name: "Franchise Agreement", url: "#" },
      { name: "Master Service Agreement", url: "#" },
      { name: "Shareholders Agreement", url: "#" },
      { name: "Joint Venture Agreement", url: "#" },
      { name: "Founders Agreement", url: "#" },
      { name: "Vendor Agreement", url: "#" },
      { name: "Consultancy Agreement", url: "#" },
      { name: "Memorandum of Understanding", url: "#" },
      { name: "Succession Certificate", url: "#" },
      { name: "Scope of Work Agreement", url: "#" },
      { name: "Share Purchase Agreement", url: "#" },
      { name: "Relinquishment Deed", url: "#" },
      { name: "Legal Heir Certificate", url: "#" },
      { name: "Trade Licence", url: "#" },
      { name: "Noncompete Agreement", url: "#" },
      { name: "Finance Agreement", url: "#" },
      { name: "GDPR", url: "#" },
    ],
  },
  personalandfamily: {
    title: "Personal & Family",
    items: [
      { name: "Will Registration", url: "#" },
      { name: "Probate of Will", url: "#" },
      { name: "Power of Attorney", url: "#" },
    ],
  },
  realestate: {
    title: "Real Estate",
    items: [
      { name: "Rental Agreement", url: "#" },
      { name: "Sale Deed", url: "#" },
      { name: "Gift Deed", url: "#" },
      { name: "Rental Tenant Notice", url: "#" },
    ],
  },
  notices: {
    title: "Notices",
    items: [
      { name: "Legal Notice", url: "#" },
      { name: "Legal Notice for Money Recovery", url: "#" },
      { name: "Legal Notice for recovery of dues", url: "#" },
      { name: "Cheque Bounce Notice", url: "#" },
      { name: "Legal Notice Under Consumer Protection Act", url: "#" },
    ],
  },
  hrpolicies: {
    title: "HR Policies",
    items: [
      { name: "Employment Agreement", url: "#" },
      { name: "ESOP", url: "#" },
      { name: "Payroll Maintenance", url: "#" },
    ],
  },
  fundraising: {
    title: "Fundraising",
    items: [
      { name: "Fundraising", url: "#" },
      { name: "Pitch-Deck", url: "#" },
      { name: "Business Loan", url: "#" },
      { name: "DPR Service", url: "#" },
    ],
  },
  patent: {
    title: "Patent",
    items: [
      { name: "Indian Patent Search", url: "#" },
      { name: "Provisional Patent Application", url: "#" },
      { name: "Patent Registration", url: "#" },
    ],
  },
  ngo: {
    title: "NGO",
    items: [
      { name: "NGO", url: "#" },
      { name: "Section 8 Company", url: "#" },
      { name: "Trust Registration", url: "#" },
      { name: "Society Registration", url: "#" },
      { name: "NGO Compliances", url: "#" },
      { name: "NGO Compliance", url: "#" },
      { name: "Section 8 Compliance", url: "#" },
      { name: "CSR-1 Filing", url: "#" },
      { name: "Sec.80G & Sec. 12A", url: "#" },
      { name: "Darpan Registration", url: "#" },
      { name: "FCRA Registration", url: "#" },
    ],
  },
  propertyandpersonal: {
    title: "Property & Personal",
    items: [
      { name: "Property Title Verification", url: "#" },
      { name: "Property Registration", url: "#" },
      { name: "Rera Complaint", url: "#" },
      { name: "Licenses & Registration", url: "#" },
      { name: "Gun License", url: "#" },
      { name: "Name Change & Other Conditions", url: "#" },
      { name: "Name Change", url: "#" },
      { name: "Religion Change", url: "#" },
      { name: "Gender Change", url: "#" },
      { name: "File an e-FIR", url: "#" },
      { name: "Online Police Complaint", url: "#" },
      { name: "Marriage", url: "#" },
      { name: "Marriage Registration", url: "#" },
      { name: "Court Marriage", url: "#" },
      { name: "Mutual Divorce", url: "#" },
      { name: "Divorce Alimony", url: "#" },
      { name: "Restitution of Conjugal Rights", url: "#" },
      { name: "Immigration", url: "#" },
      { name: "Corporate immigration", url: "#" },
      { name: "Family immigration", url: "#" },
      { name: "College immigration", url: "#" },
      { name: "File a Consumer Complaint", url: "#" },
      { name: "Online Consumer Complaint", url: "#" },
      { name: "E-Commerce Consumer Complaint", url: "#" },
      { name: "Insurance Consumer Complaint", url: "#" },
    ],
  },
  lawyersandexperts: {
    title: "Lawyers & Experts",
    items: [
      { name: "Labour Law Advisor", url: "#" },
      { name: "Criminal Lawyer", url: "#" },
      { name: "Labour Lawyer", url: "#" },
      { name: "Consumer Court Lawyer", url: "#" },
      { name: "Divorce Lawyer", url: "#" },
      { name: "Banking Lawyer", url: "#" },
      { name: "Immigration Lawyer", url: "#" },
      { name: "Family Lawyer", url: "#" },
      { name: "Litigation Lawyer", url: "#" },
      { name: "Intellectual Property Lawyer", url: "#" },
      { name: "Trademark Lawyer", url: "#" },
      { name: "Reply to ITR Notice", url: "#" },
      { name: "Expert Services", url: "#" },
      { name: "Technolgy, Media and, Telecom (TMT)", url: "#" },
      { name: "Risk Management and Regulatory Risk", url: "#" },
    ],
  },
};

function displayInfo(infoType, index) {
  const sectionTitle = document.querySelectorAll("#sectionTitle")[index];
  const sectionList = document.querySelectorAll("#sectionList")[index];

  if (!sectionTitle || !sectionList) return;

  const content = rightSideContent[infoType];
  console.log("Content for Info Type:", content);
  if (content) {
    const boldItems = [
      "NGO Compliance",
      "Licenses & Registration",
      "Name Change & Other Conditions",
      "File an e-FIR",
      "Marriage",
      "Immigration",
      "File a Consumer Complaint",
      "Expert Services",
    ];
    sectionTitle.textContent = content.title;
    sectionList.innerHTML = content.items
      .map((item) => {
        const isBold = boldItems.includes(item.name);
        const styles = isBold
          ? "font-weight: bold; margin-top: 15px; font-size: 15px; text-dark"
          : "";

        return `
                        <li>
                            <a 
                                href="${item.url}" 
                                style="${styles}; display: block; padding: 8px; text-decoration: none; color: inherit;"
                                onclick="handleNavItemClick('${item.name.replace(
                                  /'/g,
                                  "\\'"
                                )}', '${item.url}')"
                            >
                                ${item.name}
                            </a>
                        </li>
                    `;
      })
      .join("");
  } else {
    sectionTitle.textContent = "Not Found";
    sectionList.innerHTML = "<li>No items to display</li>";
  }
}
// Handle navigation item clicks
function handleNavItemClick(itemName, itemUrl) {
  console.log(`Navigating to: ${itemName} at ${itemUrl}`);
  window.location.href = itemUrl;
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileDropbtns = document.querySelectorAll(".mobile-dropbtn");
  const toggleBtn = document.querySelector(".toggle-btn");
  const toggleContainer = document.querySelector(".toggle-container");

  // Toggle mobile menu
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Handle mobile dropdown menus
  mobileDropbtns.forEach((btn) => {
    btn.addEventListener("clic.nek", function () {
      const dropdownContent = thisxtElementSibling;

      // Close all other dropdowns
      document
        .querySelectorAll(".mobile-dropdown-content")
        .forEach((content) => {
          if (content !== dropdownContent) {
            content.classList.remove("active");
          }
        });

      // Toggle current dropdown
      dropdownContent.classList.toggle("active");
    });
  });

  // Toggle button dropdown
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleContainer.classList.toggle("active");
  });

  // Close mobile menu and toggle dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar")) {
      mobileMenu.classList.remove("active");
      document
        .querySelectorAll(".mobile-dropdown-content")
        .forEach((content) => {
          content.classList.remove("active");
        });
    }

    if (!event.target.closest(".toggle-container")) {
      toggleContainer.classList.remove("active");
    }
  });
});

window.addEventListener("scroll", function () {
  let navbar = document.querySelector("#navbar_top");
  if (window.scrollY > 50) {
    // Adjust 50px as needed
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Video Popup Functions
function openVideoPopup() {
  document.getElementById("videoPopup").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeVideoPopup() {
  document.getElementById("videoPopup").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Agreement Popup Functions
function openAgreementPopup() {
  document.getElementById("agreementPopup").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeAgreementPopup() {
  document.getElementById("agreementPopup").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Add click event listeners
document
  .getElementById("watchVideoBtn")
  .addEventListener("click", openVideoPopup);
document
  .getElementById("viewAgreementBtn")
  .addEventListener("click", openAgreementPopup);

// Close popups when clicking outside
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("data-section");
      const section = document.getElementById(sectionId);

      if (section) {
        const navHeight = document.querySelector(".sticky-nav").offsetHeight;
        const sectionTop = section.offsetTop - navHeight;

        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Active section highlighting
  const sections = document.querySelectorAll(".content-section");
  const navHeight = document.querySelector(".sticky-nav").offsetHeight;

  function setActiveSection() {
    const scrollPosition = window.scrollY + navHeight + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("data-section") === sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Update active section on scroll
  window.addEventListener("scroll", setActiveSection);

  // Set initial active section
  setActiveSection();

  // Form navigation variables
  const form = document.getElementById("gst-form");
  const formContainer = document.getElementById("registration-form");
  const steps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");
  const stepIndicator = document.getElementById("step-indicator");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");

  // Document upload elements
  const fileInputs = document.querySelectorAll(".file-input");
  const documentsUploaded = document.getElementById("documents-uploaded");
  const uploadStatusText = document.getElementById("upload-status-text");
  const progressCircle = document.querySelector(
    ".progress-circle circle.progress"
  );

  // GST Registration button
  const gstRegistrationBtn = document.getElementById("gstRegistrationBtn");
  const gstCtaBtn = document.getElementById("gst-cta-btn");

  // Document modal variables
  const viewAllDocumentsBtn = document.getElementById("view-all-documents");
  const documentModal = document.getElementById("document-modal");
  const closeModalBtn = document.querySelector(".close-modal");
  const closeModalBtnFooter = document.getElementById("close-modal-btn");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // Current step
  let currentStep = 1;
  let uploadedCount = 0;
  const totalDocuments = 5;

  // Form data object
  const formData = {
    businessName: "",
    businessType: "",
    pan: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    incorporationDate: "",
    turnover: "",
    agreeTerms: false,
    documents: {},
  };

  // Show form when GST Registration button is clicked
  gstRegistrationBtn.addEventListener("click", function () {
    setTimeout(() => {
      formContainer.scrollIntoView({ behavior: "smooth" });
    }, 100);
  });

  // Show form when CTA button is clicked
  if (gstCtaBtn) {
    gstCtaBtn.addEventListener("click", function () {
      setTimeout(() => {
        formContainer.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });
  }

  // Open document modal
  viewAllDocumentsBtn.addEventListener("click", function (e) {
    e.preventDefault();
    documentModal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  });

  // Close document modal
  closeModalBtn.addEventListener("click", function () {
    documentModal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  });

  // Close modal with footer button
  if (closeModalBtnFooter) {
    closeModalBtnFooter.addEventListener("click", function () {
      documentModal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }

  // Close modal when clicking outside
  window.addEventListener("click", function (event) {
    if (event.target === documentModal) {
      documentModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Tab functionality
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons and contents
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Show corresponding content
      const tabId = this.getAttribute("data-tab");
      document.getElementById(`${tabId}-tab`).classList.add("active");
    });
  });

  // WhatsApp Integration
  const whatsappToggle = document.getElementById("whatsappToggle");
  if (whatsappToggle) {
    whatsappToggle.addEventListener("change", function () {
      if (this.checked) {
        // Replace with your WhatsApp number and message
        const phoneNumber = "917990856564";
        const message = "Hello! I am interested in GST Registration services.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, "_blank");
      }
    });
  }

  // Update upload progress
  function updateUploadProgress() {
    // Update counter
    documentsUploaded.textContent = uploadedCount;

    // Update progress circle
    const progress = (uploadedCount / totalDocuments) * 220;
    progressCircle.style.strokeDashoffset = 220 - progress;

    // Update status text with animation
    uploadStatusText.style.opacity = "0";
    setTimeout(() => {
      if (uploadedCount === 0) {
        uploadStatusText.textContent = "No documents uploaded yet";
      } else if (uploadedCount === totalDocuments) {
        uploadStatusText.textContent = "All documents uploaded successfully!";
      } else {
        uploadStatusText.textContent = `${uploadedCount} of ${totalDocuments} documents uploaded`;
      }
      uploadStatusText.style.opacity = "1";
    }, 200);
  }

  // Create reupload button
  function createReuploadButton(documentCard, uploadBtn, statusIndicator) {
    const reuploadBtn = document.createElement("button");
    reuploadBtn.className = "reupload-btn";
    reuploadBtn.innerHTML = '<i class="fa-solid fa-arrow-rotate-right"></i>';

    reuploadBtn.addEventListener("click", () => {
      uploadBtn.style.display = "block";
      statusIndicator.classList.remove("visible");
      documentCard.style.borderColor = "var(--gray-200)";
      uploadedCount--;
      updateUploadProgress();
      reuploadBtn.remove();
    });

    return reuploadBtn;
  }

  // Document upload handling
  fileInputs.forEach((input) => {
    input.addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (file) {
        const documentCard = this.closest(".document-card");
        const documentType = documentCard.dataset.document;
        const statusIndicator = documentCard.querySelector(".status-indicator");
        const uploadBtn = documentCard.querySelector(".upload-btn");

        // Update form data
        formData.documents[documentType] = file.name;

        // Show upload success with animation
        uploadBtn.style.display = "none";
        statusIndicator.classList.add("visible");
        statusIndicator.querySelector(".status-text").textContent =
          "Uploaded successfully";

        // Update progress
        uploadedCount++;
        updateUploadProgress();

        // Add success state to card with animation
        documentCard.style.borderColor = "var(--success-color)";

        // Add reupload button
        const reuploadBtn = createReuploadButton(
          documentCard,
          uploadBtn,
          statusIndicator
        );
        statusIndicator.appendChild(reuploadBtn);
      }
    });
  });

  function updateUI() {
    // Hide all steps
    steps.forEach((step) => step.classList.add("hidden"));

    // Show current step with fade animation
    const currentStepElement = document.getElementById(`step-${currentStep}`);
    currentStepElement.classList.remove("hidden");
    currentStepElement.style.opacity = "0";
    setTimeout(() => {
      currentStepElement.style.opacity = "1";
    }, 50);

    // Update progress indicator
    stepIndicator.textContent = `Step ${currentStep} of 4`;

    // Update progress steps with animation
    progressSteps.forEach((step, index) => {
      if (index + 1 <= currentStep) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });

    // Update buttons
    if (currentStep === 1) {
      prevBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
    }

    if (currentStep === 4) {
      nextBtn.classList.add("hidden");
      submitBtn.classList.remove("hidden");
      submitBtn.disabled = uploadedCount < totalDocuments;
    } else {
      nextBtn.classList.remove("hidden");
      submitBtn.classList.add("hidden");
    }
  }

  // Validate current step
  function validateStep(step) {
    let isValid = true;
    const currentStepElement = document.getElementById(`step-${step}`);
    const requiredInputs = currentStepElement.querySelectorAll("[required]");

    requiredInputs.forEach((input) => {
      if (!input.value) {
        isValid = false;
        input.classList.add("error");
        input.style.borderColor = "var(--danger-color)";

        // Add shake animation
        input.style.animation = "shake 0.5s";
        setTimeout(() => {
          input.style.animation = "";
        }, 500);

        input.addEventListener(
          "input",
          function () {
            this.style.borderColor = "";
            this.classList.remove("error");
          },
          { once: true }
        );
      }
    });

    // Additional validation for Step 4
    if (step === 4 && uploadedCount < totalDocuments) {
      isValid = false;
      alert("Please upload all required documents.");
    }

    if (!isValid) {
      // Show error message with animation
      const errorMessage = document.createElement("div");
      errorMessage.className = "error-message";
      errorMessage.textContent = "Please complete all required fields";
      errorMessage.style.color = "var(--danger-color)";
      errorMessage.style.textAlign = "left";
      errorMessage.style.marginTop = "1rem";

      currentStepElement.appendChild(errorMessage);
      setTimeout(() => {
        errorMessage.remove();
      }, 3000);
    }

    return isValid;
  }

  // Save form data from current step
  function saveFormData(step) {
    const currentStepElement = document.getElementById(`step-${step}`);
    const inputs = currentStepElement.querySelectorAll("input, select");

    inputs.forEach((input) => {
      if (input.type === "checkbox") {
        formData[input.name] = input.checked;
      } else if (input.type === "file") {
        // File inputs are handled separately
      } else {
        formData[input.name] = input.value;
      }
    });
  }

  // Generate random application ID
  function generateApplicationId() {
    return "GST" + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      return;
    }

    // Save form data
    saveFormData(currentStep);

    // Generate application ID
    const applicationId = generateApplicationId();

    // Create success message container
    const successContainer = document.createElement("div");
    successContainer.className = "success-container";
    successContainer.style.padding = "2rem";
    successContainer.style.textAlign = "center";

    // Create success message with animations
    const successMessage = document.createElement("div");
    successMessage.className = "success-message";
    successMessage.innerHTML = `
      <div class="success-icon">
        <i class="fa-solid fa-circle-check" style="font-size: 4rem; color: var(--success-color); margin-bottom: 1.5rem;"></i>
      </div>
      <h3 style="font-size: 1.5rem; color: var(--text-dark); margin-bottom: 1rem;">Application Submitted Successfully! 🎉</h3>
      <div class="application-details" style="background: var(--gray-50); padding: 1.5rem; border-radius: var(--border-radius); margin: 1.5rem 0;">
        <p style="font-size: 1.1rem; color: var(--text-dark); margin-bottom: 0.5rem;">Application ID: <strong>${applicationId}</strong></p>
        <p style="color: var(--text-medium); margin-bottom: 1rem;">Please save this ID for future reference</p>
        <div class="notification-info" style="text-align: left; margin-top: 1.5rem;">
          <div style="margin-bottom: 1rem;">
            <i class="fa-brands fa-whatsapp" style="color: #25D366;"></i>
            <span style="margin-left: 0.5rem;">A WhatsApp message will be sent to: ${formData.phone}</span>
          </div>
          <div>
            <i class="fa-solid fa-envelope" style="color: var(--primary-color);"></i>
            <span style="margin-left: 0.5rem;">Quotation will be sent to: ${formData.email}</span>
          </div>
        </div>
      </div>
      <div class="timeline" style="margin-top: 2rem; text-align: left;">
        <h4 style="font-size: 1.2rem; margin-bottom: 1rem;">What's Next?</h4>
        <div class="timeline-item" style="display: flex; gap: 1rem; margin-bottom: 1rem;">
          <div style="color: var(--success-color);"><i class="fa-solid fa-clock"></i></div>
          <div>
            <p style="font-weight: 500;">Within 24 Hours</p>
            <p style="color: var(--text-medium);">You will receive a detailed quotation via email</p>
          </div>
        </div>
        <div class="timeline-item" style="display: flex; gap: 1rem;">
          <div style="color: var(--primary-color);"><i class="fa-solid fa-phone"></i></div>
          <div>
            <p style="font-weight: 500;">Expert Consultation</p>
            <p style="color: var(--text-medium);">Our GST expert will contact you for further process</p>
          </div>
        </div>
      </div>
    `;

    // Add animation classes
    successMessage.style.animation = "fadeInUp 0.5s ease-out";

    // Add keyframe animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);

    // Replace form content with success message
    form.innerHTML = "";
    successContainer.appendChild(successMessage);
    form.appendChild(successContainer);

    // Reset form state after delay
    setTimeout(() => {
      form.reset();
      formData.documents = {};
      uploadedCount = 0;
      currentStep = 1;
      updateUI();
      updateUploadProgress();

      // Reset document upload status
      document.querySelectorAll(".document-card").forEach((card) => {
        card.style.borderColor = "";
        card.querySelector(".upload-btn").style.display = "block";
        card.querySelector(".status-indicator").classList.remove("visible");
      });
    }, 30000); // Show success message for 30 seconds
  }

  // Add keyframe animation for shake effect
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-10px); }
      75% { transform: translateX(10px); }
    }
  `;
  document.head.appendChild(styleSheet);

  // Event listeners
  nextBtn.addEventListener("click", () => {
    if (validateStep(currentStep)) {
      saveFormData(currentStep);
      currentStep++;
      updateUI();
      window.scrollTo(0, formContainer.offsetTop);
    }
  });

  prevBtn.addEventListener("click", () => {
    currentStep--;
    updateUI();
    window.scrollTo(0, formContainer.offsetTop);
  });

  form.addEventListener("submit", handleSubmit);

  // Initialize UI
  updateUI();
  updateUploadProgress();

  // Make form visible with animation
  setTimeout(() => {
    formContainer.classList.add("visible");
  }, 100);

  // GST Eligibility Checker
  const checkEligibilityBtn = document.getElementById("checkEligibilityBtn");
  const eligibilityResult = document.getElementById("eligibilityResult");
  const eligibleResult = document.getElementById("eligibleResult");
  const notEligibleResult = document.getElementById("notEligibleResult");
  const mandatoryResult = document.getElementById("mandatoryResult");

  checkEligibilityBtn.addEventListener("click", function () {
    const businessType = document.getElementById("businessType").value;
    const annualTurnover = document.getElementById("annualTurnover").value;
    const state = document.getElementById("state").value;

    // Validate inputs
    if (!businessType || !annualTurnover || !state) {
      alert("Please fill in all fields to check eligibility.");
      return;
    }

    // Hide all result divs
    eligibleResult.classList.add("hidden");
    notEligibleResult.classList.add("hidden");
    mandatoryResult.classList.add("hidden");

    // Check eligibility based on inputs
    let isEligible = false;
    let isMandatory = false;

    // E-commerce sellers and interstate businesses always need GST
    if (businessType === "ecommerce" || businessType === "interstate") {
      isMandatory = true;
    }
    // For special category states, threshold is 10L
    else if (state.startsWith("special-")) {
      if (annualTurnover === "below10L") {
        isEligible = false;
      } else {
        isEligible = true;
      }
    }
    // For regular states, threshold is 20L
    else if (state.startsWith("regular-")) {
      if (annualTurnover === "below10L" || annualTurnover === "10L-20L") {
        isEligible = false;
      } else {
        isEligible = true;
      }
    }

    // Show appropriate result
    eligibilityResult.classList.remove("hidden");

    if (isMandatory) {
      mandatoryResult.classList.remove("hidden");
    } else if (isEligible) {
      eligibleResult.classList.remove("hidden");
    } else {
      notEligibleResult.classList.remove("hidden");
    }

    // Scroll to result
    setTimeout(() => {
      eligibilityResult.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
  });
});
lucide.createIcons();

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });
});

// Add smooth scroll for CTA buttons
const ctaButtons = document.querySelectorAll(".indiacerty-cta button");
ctaButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    // Add your button click handling logic here
    console.log("Button clicked:", button.textContent);
  });
});
