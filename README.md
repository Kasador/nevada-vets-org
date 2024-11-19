# Overview to https://nevadavets.org/

## **Website Redevelopment**

This repository contains the source code for the redevelopment of [NevadaVets.org](https://nevadavets.org/), a non-profit website previously built using WordPress. The new tech stack is designed for simplicity, performance, and ease of content management for non-technical users.

## **Tech Stack Overview**

### **Frontend**
- **ReactJS**: For building a dynamic, responsive, and component-based UI.
- **Tailwind CSS**: For styling with utility-first CSS classes, maintaining a consistent and clean design directly in JSX.

### **Backend and Content Management**
- **Google Firebase Database**: Storing images, email addresses, and other critical data as structured records.
- **Contentful CMS**: A headless CMS for non-technical users to easily update and manage site content.


## **Why This Tech Stack?**

### **1. ReactJS & Tailwind CSS**
- Ensures modular and reusable code components for easy future updates.
- Tailwind CSS integrates seamlessly into React components, reducing the need for external CSS files and ensuring a unified design.

### **2. Contentful CMS**
- **User-Friendly Interface**: Ideal for non-technical users, providing an intuitive way to update content without requiring developer intervention. 
	- _This solution is chosen over Strapi due to the simplicity and UX/UI that comes with Contentful CMS._
- **Headless API Integration**: Content is served as JSON via REST/GraphQL APIs, enabling dynamic updates without refreshing the site or clearing browser cache.  
	- _This solution is chosen over building a customized CMS due to the user-friendly interface and not reinventing the wheel._

### **3. Firebase Database**
- Efficiently stores and serves images and other content via URLs to reduce server overhead.
- Ensures fast and reliable data retrieval without the need for traditional file hosting.

### **4. Simplified CSR Workflow**
- Combines Client-Side Rendering (CSR) with Firebase and Contentful for a fast and lightweight website.
	- _Avoids the complexity of Server-Side Rendering (SSR), keeping costs and management overhead low, suitable for a non-profit organization._

---

# Overview to Project Setup

### **Prerequisites**
- Node.js and npm installed.
- Create a React App _with_ Vite. 
	- Using this article, [freecodecamp.org](https://www.freecodecamp.org/news/how-to-create-a-react-app-in-2024/#:~:text=Create%20React%20App%20has%20been,new%20React%20project%20in%202024.).
- Firebase CLI installed.
- Access to Contentful account with API keys configured.

### **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/nevada-vets-org.git
   cd nevada-vets-org
   
