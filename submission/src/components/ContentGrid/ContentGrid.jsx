import React from 'react';

const retroPC = require('../../images/image-retro-pcs.jpg');
const topLaptops = require('../../images/image-top-laptops.jpg');
const gamingGrowth = require('../../images/image-gaming-growth.jpg');

export default function ContentGrid() {
    return (
        <div id="content-grid">
            <div id="main-image" />
            <div id="description">
                <div className="container">
                    <h1>The Bright Future of Web 3.0?</h1>
                </div>

                <div id="cta" className="container cta">
                    <p>
                        We dive into the next evolution of the web that claims
                        to put the power of the platforms back into the hands of
                        the people. But is it really fulfilling its promise?
                    </p>
                    <button>Read More</button>
                </div>
            </div>
            <div id="new-content">
                <div id="heading">
                    <h2>New</h2>
                </div>
                <div className="new-article">
                    <h3>Hygrogen VS Electric Cars</h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <hr />
                <div className="new-article">
                    <h3>The Downsides of AI Artistry</h3>
                    <p>
                        What are the possible adverse effects of on-demand AI
                        image generation?
                    </p>
                </div>
                <hr />
                <div className="new-article">
                    <h3>Is VC Funding Drying Up?</h3>
                    <p>
                        Private funding by VC firms is down 50% YOY. We take a
                        look at what that means.
                    </p>
                </div>
            </div>

            <article className="article">
                <img src={retroPC} alt="article-thumbnail" />
                <div className="article-content">
                    <h4>01</h4>
                    <h4 className="title">Reviving Retro PCs</h4>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </article>
            <article className="article">
                <img src={topLaptops} alt="article-thumbnail" />
                <div className="article-content">
                    <h4>02</h4>
                    <h4 className="title">Top 10 Laptops of 2022</h4>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </article>
            <article className="article">
                <img src={gamingGrowth} alt="article-thumbnail" />
                <div className="article-content">
                    <h4>03</h4>
                    <h4 className="title">The Growth of Gaming</h4>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </article>
        </div>
    );
}
