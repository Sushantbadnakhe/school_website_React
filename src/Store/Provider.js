import { createContext } from "react";

export const CdcontainerContext = createContext({
  Cdcontainer: [],
  Ga: [],
  showGallery: () => {},
  Links: [],
  SidebarTag: [],
  deleteCard: () => {},
});

export const CdcontainerProvider = ({ children }) => {
  const Links = [
    {
      Name: "Home",
      link: "/",
      sub: false,
    },
    {
      Name: "About Us",
      link: "/about-us",
      sub: false,
    },
    {
      Name: "Facilities",
      link: "/facilities",
      sub: false,
    },
    {
      Name: "Admission",
      link: "/admission",
      sub: false,
    },
    {
      Name: "Acadmic",
      link: "/acadmic",
      sub: [
        { subname: "Courses", sublink: "/courses" },
        { subname: "Exam Schedule", sublink: "/schedule" },
        { subname: "Syllabus", sublink: "/syllabus" },
        { subname: "Rules and Regulations", sublink: "/rules" },
      ],
    },
    {
      Name: "Gallery",
      link: "/gallery",
      sub: false,
    },
  ];

  const Cdcontainer = [
    {
      id: "1",
      title: "title1",
      body: "This is body of card having title title",
      date: "05/12/2024",
    },
    {
      id: "2",
      title: "title2",
      body: "This is body of card having title title for seconf curriculum.........",
      date: "05/03/2023",
    },
    {
      id: "3",
      title: "title3",
      body: "This is body of card having title title for third curriculum",
      date: "05/04/2023",
    },
    {
      id: "4",
      title: "title4",
      body: "This is body of card having title title for third curriculum",
      date: "05/04/2023",
    },
  ];

  const Ga = [
    { title: "Activities", id: "1" },
    { title: "Activities2", id: "2" },
    { title: "Activities3", id: "3" },
    { title: "Activities4", id: "4" },
    { title: "Activities4", id: "5" },
    { title: "Activities4", id: "6" },
    { title: "Activities4", id: "7" },
    { title: "Activities4", id: "8" },
    { title: "Activities4", id: "9" },
    { title: "Activities4", id: "10" },
    { title: "Activities4", id: "11" },
    { title: "Activities4", id: "12" },
  ];

  const SidebarTag = [
    {
      name: "Home",
      handler: "AdminPanel",
    },
    {
      name: "Create Notice",
      handler: "Dsh",
    },
    {
      name: "Create Card",
      handler: "Addcrd",
    },
    {
      name: "Gallery",
      handler: "AdGallery",
    },
  ];

  const showGallery = (g) => {
    console.log(g);
  };

  const deleteCard = (id) => {
    console.log(id);
  };

  return (
    <CdcontainerContext.Provider
      value={{
        Cdcontainer,
        Ga,
        showGallery,
        Links,
        SidebarTag,
        deleteCard,
      }}
    >
      {children}
    </CdcontainerContext.Provider>
  );
};
