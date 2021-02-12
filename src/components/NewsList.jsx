import React from "react";

function getDateString(dateTimeStr) {
  return new Date(dateTimeStr).toDateString();
}

const NewsItem = ({ item }) => (
  <div className="card mb-4">
    {item.urlToImage && (
      <img className="card-img-top" src={item.urlToImage} alt={item.title} />
    )}
    <div className="card-body">
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        style={{ color: "#424242" }}
      >
        <h3 className="card-title">{item.title}</h3>
      </a>
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        style={{ color: "#424242" }}
      >
        {item.content}
      </a>
      <div className="d-flex mt-2 align-items-center">
        <small>
          <strong>published at {getDateString(item.publishedAt)}</strong>
        </small>
        <div
          style={{
            padding: "0.25rem 0.5rem",
            background: "#ededed",
            color: "#424242",
            borderRadius: "0.25rem",
            display: "inline-block",
            marginLeft: "auto"
          }}
        >
          <small>{item.source.name}</small>
        </div>
      </div>
    </div>
  </div>
);

function NewsList({ news }) {
  return (
    <div>
      {news && news.length === 0 && <h4>There are No News</h4>}
      {news && news.map((item) => <NewsItem key={item.title} item={item} />)}
    </div>
  );
}

export default NewsList;
