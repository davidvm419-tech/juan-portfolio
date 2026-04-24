// Object with projects
  const projects = [
    {
      id: 1, 
      name: "Geraldine Jewelry", 
      description: "Full stack e commerce platform for custom jewelry, featuring product management, cart flow, and secure order handling.", 
      longDescription: "Geraldine Jewelry is a fully decoupled e commerce platform built as my CS50W Capstone project, designed to support a real small business selling custom jewelry. The system includes a complete product catalog, dynamic filtering, cart and checkout flow, wishlist management, and secure user authentication. The backend is powered by a Django REST API with relational models that handle products, categories, inventory, orders, and user interactions. The frontend is a modern React SPA that consumes the API and delivers a smooth, responsive shopping experience. This project demonstrates full stack architecture, API design, state management, and real world e commerce logic.",
      stack: ["React", "Django", "REST API", "SQL"], 
      image: "/images/jewelry/product.jpg", 
      gallery: [
        "/images/jewelry/catalog.jpg",
        "/images/jewelry/product.jpg",
        "/images/jewelry/settings.jpg",
      ],
      links: [
        {label: "View Live", url: null},
        {label: "View Code", url: "https://github.com/davidvm419-tech/JewelryApp-Capstone"},
        {label: "View Demo video", url: "https://www.youtube.com/watch?v=es6B5ec65nk&list=PLZGPmIFUvv2Y_WK7MkWnMXoapaVevi_3U"}, 
      ],
    },
    {
      id: 2, 
      name: "Chicake Web Page", 
      description: "Responsive website for a local cake shop, built with Flask templating.", 
      longDescription: "Chicake is a lightweight, responsive website built for a local bakery to showcase their products and allow customers to place custom cake orders. Developed using Python and Flask, the project uses Jinja templating to render dynamic pages and organize product sections cleanly. The site includes a product gallery, order placement, and a simple backend structure that can be extended into a full ordering system. The goal of this project was to create a clean, fast, and visually appealing web presence for a small business while practicing server side rendering and template driven UI development.",
      stack: ["Python", "Flask", "SQL"], 
      image: "/images/chicake/order.jpg", 
      gallery: [
        "/images/chicake/main.jpg",
        "/images/chicake/user.jpg",
        "/images/chicake/order.jpg",
      ],
      links: [
        {label: "View Live", url: "https://chicake-app.onrender.com/"},
        {label: "View Code", url: "https://github.com/davidvm419-tech/cs50-final-project"},
        {label: "View Demo video", url: "https://www.youtube.com/watch?v=A7Sc_nehB1I"}, 
      ]
    },
    {
      id: 3, 
      name: "Network Project", 
      description: "A single page social network with posts, likes, follows, pagination, and user profiles.", 
      longDescription: "Network is a social media platform inspired by Twitter, built as part of the CS50W curriculum. It features user authentication, posting, editing posts, liking, following/unfollowing users, and a fully paginated feed. The project combines Django for backend logic and data modeling with JavaScript to create a dynamic single page experience for actions like liking posts and updating content without reloading the page. It includes profile pages, follower counts, and a clean UI for browsing posts. This project highlights my ability to build interactive features, manage relational data, and integrate frontend and backend logic effectively.",
      stack: ["JavaScript", "Django", "SQL"], 
      image: "/images/network/user.jpg", 
      gallery: [
        "/images/network/posts.jpg",
        "/images/network/user.jpg",
        "/images/network/following.jpg",
      ],
      links: [
        {label: "View Live", url: null},
        {label: "View Code", url: "https://github.com/davidvm419-tech/CS50w_project_4"},
        {label: "View Demo video", url: "https://www.youtube.com/watch?v=AIjuomV6fXo&list=PLZGPmIFUvv2Y_WK7MkWnMXoapaVevi_3U&index=2"}, 
      ],
    },
  ]; 

export default projects;