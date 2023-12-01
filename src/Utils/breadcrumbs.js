const breadcrumbsConfig = {
    dashboard: {
      index: [
        {
          type: "parent",
          url: "/admin/dashboard",
          // url: "/admin",
          name: "Home",
        },
        {
          type: "current",
          url: "#",
          name: "Dashboard",
        },
      ],
    },
  };
  
  export default breadcrumbsConfig;
  