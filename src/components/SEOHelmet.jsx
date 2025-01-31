import React from "react";
import { SEOHelmet } from "react-helmet";

const SEOHelmet = ({ title, description, keywords, image }) => {
  return (
    <Helmet>
      <title>{title || "Let's Cook - Découvrez nos recettes"}</title>
      <meta
        name="description"
        content={
          description ||
          "Explorez des recettes faciles et délicieuses pour toutes les occasions. Découvrez les ingrédients et les instructions étape par étape."
        }
      />
      <meta
        name="keywords"
        content={
          keywords ||
          "recettes, cuisine, facile, plats, ingrédients, instructions"
        }
      />
      <meta
        property="og:title"
        content={title || "Let's Cook - Découvrez nos recettes"}
      />
      <meta
        property="og:description"
        content={
          description ||
          "Explorez des recettes faciles et délicieuses pour toutes les occasions."
        }
      />
      <meta property="og:image" content={image || "/hero-image.jpeg"} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEOHelmet;
