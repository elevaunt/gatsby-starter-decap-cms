import React from 'react';
import Hero01 from "../components/Sections/Hero01";
import Cta01 from "../components/Sections/Cta01";
import ProductFull from "../components/Sections/ProductFull";
import ProductCard from "../components/Product/ProductCard"
import ContentSection from "../components/Sections/ContentSection";

export const sectionsMap = {
  "Hero 01": Hero01,
  "Cta 01": Cta01,
  "Product - Full Width": ProductFull,
  "Content": ContentSection,
  "Card": ProductCard,
}

export const renderSection = (section, key) => {
  let Component = sectionsMap[section.type];
  return <Component {...section} key={key} />
}

export default renderSection;