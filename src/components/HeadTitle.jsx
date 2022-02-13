const HeadTitle = ({ title }) => {
  document.title = "Iko - " + (title ? title : "Welcome to this page!");
  return false;
};

export default HeadTitle;
