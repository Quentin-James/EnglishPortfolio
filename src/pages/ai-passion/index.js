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
          content: "Les systèmes RAG (Retrieval-Augmented Generation) représentent une avancée majeure dans le domaine du traitement du langage naturel. Cette architecture hybride combine un moteur de recherche vectoriel avec un modèle de langage de grande taille (LLM), permettant d'augmenter la précision et la pertinence des réponses générées. Le processus implique l'indexation sémantique de documents, l'extraction de vecteurs d'embeddings, et l'optimisation des requêtes pour maximiser la pertinence contextuelle."
        },
        integration: {
          title: "Intégration dans les Applications d'Entreprise",
          content: "Mon expertise se concentre sur l'intégration de systèmes RAG dans des architectures d'entreprise complexes. J'implémente des solutions qui combinent des bases de connaissances vectorielles avec des modèles de langage fine-tunés, optimisant ainsi les performances et la précision des réponses. L'utilisation de techniques avancées comme le chunking adaptatif et l'augmentation de contexte permet d'améliorer significativement la qualité des interactions homme-machine."
        },
        optimization: {
          title: "Optimisation et Performance",
          items: [
            "Implémentation de moteurs de recherche vectoriels optimisés (FAISS, Milvus)",
            "Fine-tuning de modèles de langage pour des cas d'usage spécifiques",
            "Optimisation des pipelines de traitement de données",
            "Mise en place de systèmes de monitoring et d'évaluation"
          ]
        },
        innovation: {
          title: "Perspectives d'Innovation",
          content: "Je m'intéresse particulièrement au développement de systèmes RAG multi-modaux, combinant traitement du langage naturel avec analyse d'images et de données structurées. L'objectif est de créer des assistants intelligents capables de comprendre et de traiter des informations complexes dans des contextes variés, tout en maintenant une architecture robuste et évolutive."
        },
        challenges: {
          title: "Défis Techniques et Solutions",
          content: "L'implémentation de systèmes RAG efficaces présente plusieurs défis techniques : gestion de la latence, optimisation de la mémoire, et maintien de la cohérence contextuelle. Mes solutions incluent l'utilisation de techniques de caching avancées, l'implémentation de mécanismes de fallback, et l'optimisation des requêtes vectorielles pour maximiser les performances tout en minimisant les ressources nécessaires."
        }
      }
    },
    en: {
      title: "My Passion for AI and RAG Systems",
      metaDescription: "Discover my passion for Artificial Intelligence and RAG systems",
      sections: {
        architecture: {
          title: "RAG Systems Architecture",
          content: "RAG (Retrieval-Augmented Generation) systems represent a major advancement in natural language processing. This hybrid architecture combines a vector search engine with a large language model (LLM), enabling enhanced accuracy and relevance of generated responses. The process involves semantic document indexing, embedding vector extraction, and query optimization to maximize contextual relevance."
        },
        integration: {
          title: "Enterprise Application Integration",
          content: "My expertise focuses on integrating RAG systems into complex enterprise architectures. I implement solutions that combine vector knowledge bases with fine-tuned language models, optimizing both performance and response accuracy. The use of advanced techniques such as adaptive chunking and context augmentation significantly improves human-machine interaction quality."
        },
        optimization: {
          title: "Optimization and Performance",
          items: [
            "Implementation of optimized vector search engines (FAISS, Milvus)",
            "Fine-tuning language models for specific use cases",
            "Data processing pipeline optimization",
            "Monitoring and evaluation systems implementation"
          ]
        },
        innovation: {
          title: "Innovation Perspectives",
          content: "I am particularly interested in developing multi-modal RAG systems, combining natural language processing with image analysis and structured data processing. The goal is to create intelligent assistants capable of understanding and processing complex information in various contexts, while maintaining a robust and scalable architecture."
        },
        challenges: {
          title: "Technical Challenges and Solutions",
          content: "Implementing effective RAG systems presents several technical challenges: latency management, memory optimization, and contextual coherence maintenance. My solutions include the use of advanced caching techniques, fallback mechanism implementation, and vector query optimization to maximize performance while minimizing required resources."
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