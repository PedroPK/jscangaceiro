class Negociation {

    constructor (pDate, pQuantity, pValue) {
        this.date       = pDate;
        this.quantity   = pQuantity;
        this.value      = pValue;
    }

    calcVolume() {
        return this.quantity * this.value;
    }

}