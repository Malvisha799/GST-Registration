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
  // Centralized content for all menu items
  const rightSideContent = {
    businessRegistration: {
      title: "Business Registration",
      items: [
        "Private Limited Company",
        "Limited Liability Partnership",
        "One Person Company",
        "Sole Proprietorship",
        "Nidhi Company",
        "Producer Company",
        "Partnership Firm",
        "Startup India Registration",
      ],
    },
    internationalBusiness: {
      title: "International Business Setup",
      items: [
        "US Incorporation",
        "Singapore Incorporation",
        "UK Incorporation",
        "Netherlands Incorporation",
        "Hong Kong Company Incorporation",
        "Dubai Company Incorporation",
      ],
    },
    companynamesearch: {
      title: "Company Name Search",
      items: ["Company Name Search", "Change Company Name"],
    },
    licensesandRegistrations: {
      title: "Licenses & Registrations",
      items: [
        "Digital Signature Certificate",
        "Udyam Registration",
        "MSME Registration",
        "ISO Certification",
        "FSSAI [Food License]",
        "IEC [Import/Export Code]",
        "Apeda RCMC",
        "Spice Board Registration",
        "FIEO Registration",
        "Legal Metrology",
        "Hallmark Registration",
        "BIS Registration",
        "Liquor License",
        "CLRA Registration & Licensing",
        "AD Code Registration",
        "IRDAI Registration",
        "Drug & Cosmetic License",
        "Customs Clearance",
      ],
    },
    webDevelopment: {
      title: "Web Development",
      items: ["Web/E-Commerce Website Development"],
    },
    gstandotherindirecttax: {
      title: "GST and Other Indirect Tax",
      items: [
        "GST Registration",
        "GST Filing",
        "GST Login Portal",
        "HSN Code Finder",
        "GST Cancellation and Revocation",
        "Indirect Tax",
        "RoDTEP",
      ],
    },
    changesinpvtltdcompany: {
      title: "Changes in Pvt Ltd Company",
      items: [
        "Add a Director",
        "Remove a Director",
        "Increase Authorized Capital",
        "Close the Pvt Ltd Company",
        "Strike off Company",
        "Change Objective/Activity",
        "Change Address",
      ],
    },
    changesinlimitedliabilitypartnership: {
      title: "Changes In Limited Liability Partnership",
      items: [
        "Add Designated Partner",
        "Changes to LLP Agreement",
        "Close to LLP",
      ],
    },
    mandatoryannualfilings: {
      title: "Mandatory Annual Filings",
      items: [
        "Annual Compliance Services",
        "LLP Annual Filings",
        "Secretarial Audit",
      ],
    },
    labourcompliance: {
      title: "Labour Compliance",
      items: [
        "Provident Fund (PF) Registration",
        "ESI Registration",
        "Professional Tax Registration",
        "Shops and Establishments License",
        "Employee Stock Option Plan [ESOP]",
        "POSH Compliance",
        "Labor Law Advisor",
      ],
    },
    accountingandtax: {
      title: "Accounting & Tax",
      items: [
        "Accounting and Book-keeping",
        "TDS Return Filing",
        "Individual Income Tax Filing",
        "Proprietorship Tax Return Filing",
        "ITR for LLP",
        "Corporate Tax",
        "Income Tax Assessment",
        "Income Tax Notice",
        "Virtual CFO",
      ],
    },
    convertyourbusiness: {
      title: "Convert Your Business",
      items: [
        "Proprietorship to Pvt Ltd Company",
        "Compliance Check - Secretarial Audit",
        "Due Diligence",
        "RBI Compliance",
        "Convert Partnership into LLP Company",
        "Convert Private into Public Limited Company",
        "Convert Private into OPC Company",
      ],
    },
    trademark: {
      title: "Trademark",
      items: [
        "Trademark Registration",
        "Trademark Search",
        "Respond to TM Objection",
        "Well Known Trademark",
        "Trademark Watch",
        "Trademark Renewal",
        "Trademark Assignment",
        "USA Trademark",
        "International Trademark",
        "Trademark Class Finder",
      ],
    },
    copyright: {
      title: "Copyright",
      items: ["Copyright Registration", "Copyright Music"],
    },
    patent: {
      title: "Patent",
      items: [
        "Indian Patent Search",
        "Provisional Patent Application",
        "Patent Registration",
      ],
    },
    infringement: {
      title: "Infringement",
      items: [
        "Copyright Infringement",
        "Patent Infringement",
        "Trademark Infringement",
      ],
    },
    designregistration: {
      title: "Design Registration",
      items: ["Logo Design", "Design Registration"],
    },
    businesscontracts: {
      title: "Business Contracts",
      items: [
        "Non Disclosure Agreement NDA",
        "Service Level Agreement",
        "Franchise Agreement",
        "Master Service Agreement",
        "Shareholders Agreement",
        "Joint Venture Agreement",
        "Founders Agreement",
        "Vendor Agreement",
        "Consultancy Agreement",
        "Memorandum of Understanding",
        "Succession Certificate",
        "Scope of Work Agreement",
        "Share Purchase Agreement",
        "Relinquishment Deed",
        "Legal Heir Certificate",
        "Trade Licence",
        "Noncompete Agreement",
        "Finance Agreement",
        "GDPR",
      ],
    },
    personalandfamily: {
      title: "Personal & Family",
      items: ["Will Registration", "Probate of Will", "Power of Attorney"],
    },
    realestate: {
      title: "Real Estate",
      items: [
        "Rental Agreement",
        "Sale Deed",
        "Gift Deed",
        "Rental Tenant Notice",
      ],
    },
    notices: {
      title: "Notices",
      items: [
        "Legal Notice",
        "Legal Notice for Money Recovery",
        "Legal Notice for recovery of dues",
        "Cheque Bounce Notice",
        "Legal Notice Under Consumer Protection Act",
      ],
    },
    hrpolicies: {
      title: "HR Policies",
      items: ["Employment Agreement", "ESOP", "Payroll Maintenance"],
    },
    fundraising: {
      title: "Fundraising",
      items: ["Fundraising", "Pitch-Deck", "Business Loan", "DPR Service"],
    },
    patent: {
      title: "Patent",
      items: [
        "Indian Patent Search",
        "Provisional Patent Application",
        "Patent Registration",
      ],
    },
    ngo: {
      title: "NGO",
      items: [
        "NGO",
        "Section 8 Company",
        "Trust Registration",
        "Society Registration",
        "NGO Compliances",
        "NGO Compliance",
        "Section 8 Compliance",
        "CSR-1 Filing",
        "Sec.80G & Sec. 12A",
        "Darpan Registration",
        "FCRA Registration",
      ],
    },
    propertyandpersonal: {
      title: "Property & Personal",
      items: [
        "Property Title Verification",
        "Property Registration",
        "Rera Complaint",
        "Licenses & Registration",
        "Gun License",
        "Name Change & Other Conditions",
        "Name Change",
        "Religion Change",
        "Gender Change",
        "File an e-FIR",
        "Online Police Complaint",
        "Marriage",
        "Marriage Registration",
        "Court Marriage",
        "Mutual Divorce",
        "Divorce Alimony",
        "Restitution of Conjugal Rights",
        "Immigration",
        "Corporate immigration",
        "Family immigration",
        "College immigration",
        "File a Consumer Complaint",
        "Online Consumer Complaint",
        "E-Commerce Consumer Complaint",
        "Insurance Consumer Complaint",
      ],
    },
    lawyersandexperts: {
      title: "Lawyers & Experts",
      items: [
        "Labour Law Advisor",
        "Criminal Lawyer",
        "Labour Lawyer",
        "Consumer Court Lawyer",
        "Divorce Lawyer",
        "Banking Lawyer",
        "Immigration Lawyer",
        "Family Lawyer",
        "Litigation Lawyer",
        "Intellectual Property Lawyer",
        "Trademark Lawyer",
        "Reply to ITR Notice",
        "Expert Services",
        "Technolgy, Media and, Telecom (TMT)",
        "Risk Management and Regulatory Risk",
      ],
    },
  };
  
  function displayInfo(infoType, index) {
    const sectionTitle = document.querySelectorAll("#sectionTitle")[index];
    const sectionList = document.querySelectorAll("#sectionList")[index];
  
    if (!sectionTitle || !sectionList) {
      console.error("Section elements not found!");
      return;
    }
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
          // Check for "NGO Compliance" and add custom styles
          if (boldItems.includes(item)) {
            return `<li style="font-weight: bold; margin-top: 15px; font-size: 15px; text-dark">${item}</li>`;
          }
          return `<li>${item}</li>`;
        })
        .join("");
    } else {
      sectionTitle.textContent = "Not Found";
      sectionList.innerHTML = "<li>No items to display</li>";
    }
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

  document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute("data-section");
        const section = document.getElementById(sectionId);

        if (section) {
          const navHeight =
            document.querySelector(".sticky-nav").offsetHeight;
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

    // GST Registration button
    const gstRegistrationBtn =
      document.getElementById("gstRegistrationBtn");
    const gstCtaBtn = document.getElementById("gst-cta-btn");

    // Document modal variables
    const viewAllDocumentsBtn =
      document.getElementById("view-all-documents");
    const documentModal = document.getElementById("document-modal");
    const closeModalBtn = document.querySelector(".close-modal");
    const closeModalBtnFooter = document.getElementById("close-modal-btn");
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    // Current step
    let currentStep = 1;

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
    };

    // Show form when GST Registration button is clicked
    gstRegistrationBtn.addEventListener("click", function () {
      formContainer.classList.add("visible");
      setTimeout(() => {
        formContainer.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });

    // Show form when CTA button is clicked
    if (gstCtaBtn) {
      gstCtaBtn.addEventListener("click", function () {
        formContainer.classList.add("visible");
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

    // Update UI based on current step
    function updateUI() {
      // Hide all steps
      steps.forEach((step) => step.classList.add("hidden"));

      // Show current step
      document
        .getElementById(`step-${currentStep}`)
        .classList.remove("hidden");

      // Update progress indicator
      stepIndicator.textContent = `Step ${currentStep} of 3`;

      // Update progress steps
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

      if (currentStep === 3) {
        nextBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden");
      } else {
        nextBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
      }
    }

    // Go to next step
    function nextStep() {
      // Validate current step
      if (!validateStep(currentStep)) {
        return;
      }

      // Save form data
      saveFormData(currentStep);

      // Increment step if not at the end
      if (currentStep < 3) {
        currentStep++;
        updateUI();
        window.scrollTo(0, formContainer.offsetTop);
      }
    }

    // Go to previous step
    function prevStep() {
      if (currentStep > 1) {
        currentStep--;
        updateUI();
        window.scrollTo(0, formContainer.offsetTop);
      }
    }

    // Validate current step
    function validateStep(step) {
      let isValid = true;
      const currentStepElement = document.getElementById(`step-${step}`);

      // Get all required inputs in current step
      const requiredInputs =
        currentStepElement.querySelectorAll("[required]");

      requiredInputs.forEach((input) => {
        if (!input.value) {
          isValid = false;
          input.classList.add("error");

          // Add error class
          input.style.borderColor = "red";

          // Remove error class on input
          input.addEventListener(
            "input",
            function () {
              this.style.borderColor = "";
            },
            { once: true }
          );
        }
      });

      if (!isValid) {
        alert("Please fill in all required fields.");
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
        } else {
          formData[input.name] = input.value;
        }
      });
    }

    // Handle form submission
    function handleSubmit(e) {
      e.preventDefault();

      // Validate final step
      if (!validateStep(currentStep)) {
        return;
      }

      // Save form data
      saveFormData(currentStep);

      // In a real application, you would submit the form data to a server here
      console.log("Form data submitted:", formData);

      // Show success message
      alert("GST Registration application submitted successfully!");

      // Reset form
      form.reset();
      currentStep = 1;
      updateUI();
    }

    // Add animation to feature items
    const featureItems = document.querySelectorAll(".feature-item");
    if (featureItems.length > 0) {
      featureItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "opacity 0.5s ease, transform 0.5s ease";

        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, 100 + index * 150);
      });
    }

    // Event listeners
    nextBtn.addEventListener("click", nextStep);
    prevBtn.addEventListener("click", prevStep);
    form.addEventListener("submit", handleSubmit);

    // Initialize UI
    updateUI();

    // Initialize Lucide icons
    lucide.createIcons();

    // GST Eligibility Checker
    const checkEligibilityBtn = document.getElementById(
      "checkEligibilityBtn"
    );
    const eligibilityResult = document.getElementById("eligibilityResult");
    const eligibleResult = document.getElementById("eligibleResult");
    const notEligibleResult = document.getElementById("notEligibleResult");
    const mandatoryResult = document.getElementById("mandatoryResult");

    checkEligibilityBtn.addEventListener("click", function () {
      const businessType = document.getElementById("businessType").value;
      const annualTurnover =
        document.getElementById("annualTurnover").value;
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