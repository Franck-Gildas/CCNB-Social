// Sidebar
const menuItems = document.querySelectorAll(".menu-item");

// Messages
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// Theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

// Messages
// Remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

// Remove notification pop up:

const notificationsBox = document.querySelector(".notifications-popup");

const closeNotificationPopUp = (e) => {
  if (!e.target.closest(".notifications-popup"))
    notificationsBox.style.display = "none";
};

document.addEventListener("click", closeNotificationPopUp);

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();

    changeActiveItem();

    item.classList.add("active");

    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(".notification-count").style.display = "none";
    }
  });
});

// Messages
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

// Search chat
messageSearch.addEventListener("keyup", searchMessage);

// Hoghlight messages card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// Theme/Dispaly Customization

// Open Modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

// Close Modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModal);

// Fonts

// Remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    }
    if (size.classList.contains("font-size-2")) {
      fontSize = "15px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    }
    if (size.classList.contains("font-size-3")) {
      fontSize = "20px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "17rem");
    }
    if (size.classList.contains("font-size-4")) {
      fontSize = "25px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    }
    if (size.classList.contains("font-size-5")) {
      fontSize = "30px";
      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }

    // Change the font sizes of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// Remove active class from colors

const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

// Change Primary Colors

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;

    changeActiveColorClass();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }

    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// Theme Background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Changes Background Color
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

bg1.addEventListener("click", () => {
  // Add Active class
  bg1.classList.add("active");

  // Remove active class from the others
  bg2.classList.remove("active");
  bg3.classList.remove("active");

  window.location.reload();
});

bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // Add Active class
  bg2.classList.add("active");

  // Remove active class from the others
  bg1.classList.remove("active");
  bg3.classList.remove("active");

  changeBG();
});

bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // Add Active class
  bg3.classList.add("active");

  // Remove active class from the others
  bg1.classList.remove("active");
  bg2.classList.remove("active");

  changeBG();
});

// End
