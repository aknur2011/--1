let checkgrade = prompt('ypai jaz')
switch (true) {
    case (checkgrade>=90):
        alert('otlichno') 
        break;
    case (checkgrade>=70):
        alert('xoroho')
         break;
    case (checkgrade>=50):
        alert('ydofletforitelno')
        break;
    case (checkgrade<=50):
        alert('ne sdal')
        break;

    default:
        alert('tyra emes jazdun')
        break;
}
  