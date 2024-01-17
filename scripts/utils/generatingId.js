function generateId(){
  const abc123 = 'abcdefghijklmnopqistuvwxyz0123456789';

  let id = '';
  for (let i = 0; i < 32; i++) {
    if((id.length === 8) || (id.length === 13) || (id.length === 18) || (id.length === 23)){
      id += '-';
    }
    id += abc123.charAt(Math.round(Math.random()*(abc123.length-1)))
    
  }
  return id;
}

export default generateId;