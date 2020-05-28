import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const Blog = () => {
  const blog = useSelector((state) => state);
  return (
    <Layout>
      <Title>{blog.title}</Title>
      <Body>{blog.body}</Body>
    </Layout>
  );
};

const Layout = styled.section`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  padding: 0.5rem 0;
  color: tomato;
`;

const Body = styled.p`
  font-size: 1.2rem;
`;
