import React, { Component } from 'react';
import { SliderBox } from 'react-native-image-slider-box';
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                'https://www.promotionalcaps.com.au/media/codazon/slideshow/resize/1900x730/banner12.jpg',
                'http://dranged.co.za/wp-content/uploads/2015/11/shop-banner-summer-caps.jpg',
                'http://formulatedesign.co.uk/style/images/art/port/banner8full.jpg',
                'https://www.mygolfspy.com/wp-content/uploads/2009/11/hats-banner-final.jpg'
            ]
        };

    }
    render() {
        <SliderBox images={this.state.images} />
        return (

            <SliderBox
                images={this.state.images}
                sliderBoxHeight={250}
                onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                }
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                circleLoop
            />
        )
    }

}