class Utils {
  itemName: string
  itemPrice: number
  itemTotal: number

  constructor(
    itemName: string,
    itemPrice: number,
    itemTotal: number
  ) {
    console.log('inside COnstructor')
    this.itemName = itemName
    this.itemPrice = itemPrice
    this.itemTotal = itemTotal
  }

  total() {
    console.log('Inside Total')
  }
}
export default Utils
