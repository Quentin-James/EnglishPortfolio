import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLanguage } from "../../contexts/LanguageContext";

export const AIPassion = () => {
  const { content, language } = useLanguage();
  const { meta } = content;

  const aiContent = {
    fr: {
      title: "Ma Passion pour l'IA et les Systèmes RAG",
      metaDescription: "Découvrez ma passion pour l'Intelligence Artificielle et les systèmes RAG",
      sections: {
        architecture: {
          title: "Architecture des Systèmes RAG",
          content: "En tant qu'étudiant passionné par l'IA, j'ai exploré en profondeur l'architecture des systèmes RAG (Retrieval-Augmented Generation). J'ai implémenté des prototypes utilisant des modèles de langage comme GPT et des bases de données vectorielles comme FAISS. Mon projet le plus récent combine un moteur de recherche sémantique avec un LLM pour créer un assistant intelligent capable de répondre à des questions complexes sur des documents techniques."
        },
        integration: {
          title: "Projets et Expérimentations",
          content: "Dans le cadre de mes études, j'ai développé plusieurs projets autour des systèmes RAG. J'ai notamment créé un chatbot qui utilise l'embedding pour améliorer la pertinence des réponses, et j'ai expérimenté différentes techniques de chunking pour optimiser la qualité des réponses. Ces projets m'ont permis de comprendre les défis techniques liés à l'intégration de l'IA dans des applications réelles."
        },
        optimization: {
          title: "Compétences Techniques",
          items: [
            "Implémentation de moteurs de recherche vectoriels (FAISS, Milvus)",
            "Fine-tuning de modèles de langage sur des cas d'usage spécifiques",
            "Optimisation des pipelines de traitement de données",
            "Développement d'applications avec Python et les frameworks d'IA modernes"
          ]
        },
        innovation: {
          title: "Perspectives d'Apprentissage",
          content: "Je m'intéresse particulièrement au développement de systèmes RAG multi-modaux. Actuellement, je travaille sur un projet qui combine traitement du langage naturel avec analyse d'images. Mon objectif est de créer des assistants intelligents capables de comprendre et de traiter des informations complexes, tout en continuant à apprendre et à améliorer mes compétences en IA."
        },
        challenges: {
          title: "Défis et Solutions",
          content: "L'implémentation de systèmes RAG présente plusieurs défis techniques que j'ai rencontrés dans mes projets : gestion de la latence, optimisation de la mémoire, et maintien de la cohérence contextuelle. J'ai développé des solutions comme l'utilisation de techniques de caching, l'implémentation de mécanismes de fallback, et l'optimisation des requêtes vectorielles. Ces expériences m'ont permis d'acquérir une compréhension pratique des défis de l'IA."
        }
      }
    },
    en: {
      title: "My Passion for AI and RAG Systems",
      metaDescription: "Discover my passion for Artificial Intelligence and RAG systems",
      sections: {
        architecture: {
          title: "RAG Systems Architecture",
          content: "As a student passionate about AI, I've deeply explored the architecture of RAG (Retrieval-Augmented Generation) systems. I've implemented prototypes using language models like GPT and vector databases like FAISS. My most recent project combines a semantic search engine with an LLM to create an intelligent assistant capable of answering complex questions about technical documents."
        },
        integration: {
          title: "Projects and Experiments",
          content: "During my studies, I've developed several projects around RAG systems. I created a chatbot that uses embedding to improve response relevance, and I've experimented with different chunking techniques to optimize answer quality. These projects have helped me understand the technical challenges of integrating AI into real applications."
        },
        optimization: {
          title: "Technical Skills",
          items: [
            "Implementation of vector search engines (FAISS, Milvus)",
            "Fine-tuning language models for specific use cases",
            "Data processing pipeline optimization",
            "Application development with Python and modern AI frameworks"
          ]
        },
        innovation: {
          title: "Learning Perspectives",
          content: "I'm particularly interested in developing multi-modal RAG systems. Currently, I'm working on a project that combines natural language processing with image analysis. My goal is to create intelligent assistants capable of understanding and processing complex information, while continuing to learn and improve my AI skills."
        },
        challenges: {
          title: "Challenges and Solutions",
          content: "Implementing RAG systems presents several technical challenges I've encountered in my projects: latency management, memory optimization, and contextual coherence maintenance. I've developed solutions like using caching techniques, implementing fallback mechanisms, and optimizing vector queries. These experiences have given me practical understanding of AI challenges."
        }
      }
    }
  };

  const currentContent = aiContent[language];

  return (
    <HelmetProvider>
      <section id="ai-passion" className="ai-passion">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{language === 'fr' ? 'IA et RAG' : 'AI and RAG'} - {meta.title}</title>
          <meta name="description" content={currentContent.metaDescription} />
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-center mb-5">{currentContent.title}</h2>
              
              <div className="ai-content">
                <h3>{currentContent.sections.architecture.title}</h3>
                <p>{currentContent.sections.architecture.content}</p>

                <h3>{currentContent.sections.integration.title}</h3>
                <p>{currentContent.sections.integration.content}</p>

                <h3>{currentContent.sections.optimization.title}</h3>
                <ul>
                  {currentContent.sections.optimization.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3>{currentContent.sections.innovation.title}</h3>
                <p>{currentContent.sections.innovation.content}</p>

                <h3>{currentContent.sections.challenges.title}</h3>
                <p>{currentContent.sections.challenges.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}; 