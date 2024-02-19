document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('byTickets');
  var targetDiv = document.querySelector('.busName');

  button.addEventListener('click', function() {
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  });

});


selectSeats();
function selectSeats(){
let listItems = document.querySelectorAll('.seatName');
let remainSeats=40;
let count='1';
let price=550;
listItems.forEach(function(item) {
  // Add click event listener to each list item
  item.addEventListener('click', function() {
    if (count<=4) {
      remainSeats--;
      console.log(remainSeats)
      document.getElementById('seatsLeft').innerText= remainSeats;
      item.classList='text-[#FFFFFF]';
      item.style.backgroundColor= 'rgb(29, 209, 0)';
      // console.log(item.id)
      let seatId=item.id;
      // console.log('You clicked: ' + item.textContent);
      

      totalPrice(price);
      price=price+price;
      
      item.disabled=true;
      bookingDetails(seatId,count);
      discountPrice();
      confirmBooking(count);
      count++;

    } else {
      window.alert('You already Book Four Seats');
    }
    
  });
});
}



// Booking Details
function bookingDetails(seatId,count){
  const bookingDetails=`
  <tr class="bg-base-200">
  <td>${seatId}</td>
  <td>Economoy</td>
  <td>550</td>
  </tr>`
  const booking = document.getElementById('bookingdata');
  booking.insertAdjacentHTML('afterbegin',bookingDetails);
  document.querySelector('.setQuqntity').innerText=count;
  
}

//Total Price
function totalPrice(price){
  document.getElementById('totalPrice').innerText=price;
  
}


//discount price for coupon
function discountPrice(){
 let totalPrice= document.getElementById('totalPrice').innerText;
 if(totalPrice>=4400){
  let applyCoupon = document.getElementById('applyBtn');
  applyCoupon.disabled=false;
  applyCoupon.addEventListener('click',e=>{

     const coupon = document.getElementById('couponCode');

     if(coupon.value==='NEW15'){
        totalPrice = totalPrice - totalPrice*0.15;
        console.log(totalPrice)
        document.getElementById('grandTotal').innerText=totalPrice;
        applyCoupon.disabled=true;
        coupon.value='';

     }else if(coupon.value==='Couple 20'){
      totalPrice = totalPrice - totalPrice*0.2;
      console.log(totalPrice)
      document.getElementById('grandTotal').innerText=totalPrice;
      applyCoupon.disabled=true;
      coupon.value='';
     }else {
      window.alert('Your Coupon is Invalid');
     }

  });
 }

}


// confirm booking 
function confirmBooking(count){
  
  let number= document.getElementById('phoneNmb');
  console.log(number)
  let mobileNumber;
  let confirmBtn;
  number.addEventListener('input',function(event){
   mobileNumber=event.target.value;
   if(count=>1 && mobileNumber.length>=11){
     confirmBtn =document.getElementById('summit');
    
    confirmBtn.disabled=false;
    confirmBtn.style.color='text-[#ffffff]';
    confirmBtn.style.backgroundColor='rgb(29, 209, 0)';
    
  }
  // confirmBtn.addEventListener('click',function(){
  //         //pope up window
  //         // window.alert('welcome');
  //         number.value='';
  //         confirmBtn.disabled=true;
  //   })
  });



}

document.getElementById('summitForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log('hi')
  
})
