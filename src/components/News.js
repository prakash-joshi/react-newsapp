import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 20,
            newsFilter: "world"
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=${this.state.newsFilter}&apiKey=9e67a0dabc8c4ac09852b02120f3bc47&page=1&pagesize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        });
    }
    handlePreviousClick = async () => {
        console.log("P")
        let url = `https://newsapi.org/v2/everything?q=${this.state.newsFilter}&apiKey=9e67a0dabc8c4ac09852b02120f3bc47&page=${this.state.page - 1}&pagesize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        });
    }

    handleNextClick = async () => {
        console.log("N");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {
            console.log("Nothing ahead")
        }
        else {
            let url = `https://newsapi.org/v2/everything?q=${this.state.newsFilter}&apiKey=9e67a0dabc8c4ac09852b02120f3bc47&page=${this.state.page + 1}&pagesize=${this.state.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className='container my-4'>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 100) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
