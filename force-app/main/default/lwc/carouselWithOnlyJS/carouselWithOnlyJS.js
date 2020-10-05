import { LightningElement } from 'lwc';

export default class CarouselWithOnlyJS extends LightningElement {
    // Select the carousel you'll need to manipulate and the buttons you'll add events to
    //carousel = this.template.querySelector("[data-target='carousel']");
    //card = this.template.querySelector("[data-target='card']");
    //leftButton = this.template.querySelector("[data-action='slideLeft']");
    //rightButton = this.template.querySelector("[data-action='slideRight']");

    // Prepare to limit the direction in which the carousel can slide, 
    // and to control how much the carousel advances by each time.
    // In order to slide the carousel so that only three cards are perfectly visible each time,
    // you need to know the carousel width, and the margin placed on a given card in the carousel
    carouselWidth;
    cardStyle;
    cardMarginRight=0;
    cardCount;
    offset = 0;
    maxX;

    renderedCallback() {
        this.carouselWidth = this.template.querySelector(".carousel").offsetWidth;
        //this.cardStyle = this.template.querySelector(".card").currentStyle || window.getComputedStyle(this.template.querySelector(".card"));
        //this.cardMarginRight = Number(window.getComputedStyle(this.template.querySelector(".card")).marginRight.match(/\d+/g)[0]);
        //console.log('Window ', window.getComputedStyle(this.template.querySelector(".card")).marginRight.match(/\d+/g)[0]);
        //console.log('cardStyle ',this.template.querySelector(".card").currentStyle.marginRight.match(/\d+/g)[0]);
        // Count the number of total cards you have
        this.cardCount = this.template.querySelectorAll(".card").length;
        console.log('cardCount ' + this.cardCount);
        // Define an offset property to dynamically update by clicking the button controls
        // as well as a maxX property so the carousel knows when to stop at the upper limit
        this.offset = 0;
        console.log('carouselWidth renderedCallback: ' + this.carouselWidth);
        console.log('cardMarginRight renderedCallback: ' + this.cardMarginRight);

        this.maxX = -((this.cardCount / 3) * this.carouselWidth +
            (this.cardMarginRight * (this.cardCount / 3)) -
            this.carouselWidth - this.cardMarginRight);
        
        console.log('maxX ' + this.maxX);
    }


    // Add the click events
    handleLeftBtnClick(evt) {
        console.log('handleLeftBtnClick',evt);
        console.log('this.offset',this.offset);
        if (this.offset !== 0) {
            console.log('offset ' + this.offset);
            //this.offset += this.carouselWidth + this.cardMarginRight;
            this.offset += 632;
            console.log('carouselWidth ' + this.carouselWidth);
            console.log('cardMarginRight ' + this.cardMarginRight);
            this.template.querySelector(".carousel").style.transform = `translateX(${this.offset}px)`;
        }
    }

    handleRightBtnClick(evt) {
        console.log('handleRightBtnClick',evt);
        console.log('this.offset',this.offset);
        console.log('this.maxX',this.maxX);
        if (this.offset !== this.maxX) {
            console.log('offset ' + this.offset);
            console.log('maxX ' + this.maxX);
            //this.offset -= this.carouselWidth + this.cardMarginRight;
            this.offset -= 632;
            console.log('carouselWidth ' + this.carouselWidth);
            console.log('cardMarginRight ' + this.cardMarginRight);
            this.template.querySelector(".carousel").style.transform = `translateX(${this.offset}px)`;
        }
    }
}