let time = {
    d1: new Date(),
    d2: new Date(),
    d3: new Date(), //timestamp
    fact: 1,
    delay: 0 ,

    dif(){
      return (this.d3.getTime() - this.d2.getTime())/1000
    },

    calc(){
      this.val = 1 * this.dif()
      return this.val
    },

    calc2(){
      let my_time = new Date().getTime()
      let delay = Math.abs(time.d2.getTime() - my_time)/10000
      // return 1 * this.dif() + delay
      let k = (my_time - time.d2.getTime())/10000
      console.log(k)
      // console.log(time.d2.getTime() + ' - ' + my_time + " = " + (my_time - time.d2.getTime())/10000)
      // return (this.d3.getTime() - this.d2.getTime())/1000 - delay
      return (this.d3.getTime() - this.d2.getTime())/1000
    }


  }

export default time


