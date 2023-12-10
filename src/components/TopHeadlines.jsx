import { useEffect, useState } from "react";
import { Header } from "./Header";
import { fetchTopHeadlines } from "../services/NewsService";
import { Container, Row } from "react-bootstrap";
import { NewsArticle } from "./NewsArticle";

export function TopHeadlines() {
  const [articles, setArticles] = useState([]);

  async function fetchArticles() {
    try {
      const response = await fetchTopHeadlines();  // using async and await
      setArticles(response.articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchArticles();
    // fetchTopHeadlines().then((result)=>{  //using then catch
    //   setArticles(result.artcles);
    // }).catch(error);
    // console.log(error)
  }, []);
  console.log(articles);
  return (
    <Container>
      <Header text="Welcome, you can view top headlines here"></Header>
      <Row>
        {articles.map((article) => {
          return (
            <NewsArticle article={article}></NewsArticle>
          );
        })}
      </Row>
    </Container>
  );
}
