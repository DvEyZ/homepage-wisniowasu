import React from "react";
import { WiFIDetailsCardComponent } from "./WiFIDetailsCardComponent";

import './details.scss';

import scrollreveal from 'scrollreveal';

import { cms } from "../../../../CMS";

export class WiFIDetailsComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            cards: [],
            loaded: false,
            error: false
        }
    }

    componentDidMount()
    {
        fetch(`${cms}/api/wifis?` + new URLSearchParams({
            'filter[year][$eq]': `${this.props.year}`,
            'populate[0]': 'wifi_detail',
            'populate[1]': 'wifi_detail.cards',
            'populate[2]': 'wifi_detail.cards.photo',
        })).then(value => 
            value.json().then(
                value => {
                    this.setState({
                        cards: value.data[0].attributes.wifi_detail.data.attributes.cards.map((v) => {
                            return {
                                img: `${cms}${v.photo.data[0].attributes.url}`,
                                caption: v.caption,
                                title: v.title,
                                text: v.text
                            }
                        }),
                        loaded: true,
                        error: false,
                    });

                    scrollreveal().reveal(this.content.childNodes, {
                        easing: 'ease-in-out',
                        distance: '20px',
                    });
                }
            ).catch(e => this.setState({error: e}))
        ).catch(e => this.setState({error:e}));
    }

    render()
    {
        if(this.state.error) return(<div>Błąð: {this.state.error.toString()}</div>)
        return(
            <div>
                <h2 className="section_topic alt-mobile-anim">Poznaj listę atrakcji</h2>
                <div className="pageblock-full">
                    <h3 className="sub-header" style={{margin: '-20px 0 10px'}}>i ich organizatorów</h3>
                </div>
                <div ref={node => {this.content = node}}>
                    {this.state.cards.map((value, key) =>
                        <WiFIDetailsCardComponent key={key} img={value.img} caption={value.caption} title={value.title} text={value.text}/>
                    )}
                </div>
            </div>
        );
    }
}