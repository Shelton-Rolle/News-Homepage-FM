import React from 'react';

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

            <div className="article"></div>
            <div className="article"></div>
            <div className="article"></div>
        </div>
    );
}
