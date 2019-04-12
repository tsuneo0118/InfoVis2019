Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

Vec3.prototype.add = function(v)
{
    this.x += v.x;
    this.y += v.z;
    this.z += v.z;
    return this;
}

Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.min = function()
{
    var ans;
    if(this.x <= this.y){
	ans = this.x;}
    else{
	ans = this.y;}

    if(ans >= this.z){
	ans = this.z;}

    return ans;
}

Vec3.prototype.max = function()
{
    var ans;
    if(this.x >= this.y){
	ans = this.x;}
    else{
	ans = this.y;}
    
    if(ans <= this.z)
	ans = this.z;
    
    return ans;
}


Vec3.prototype.mid = function()
{¡¡
 var amin,amax,ans;
  if(this.x >= this.y){
      amax = this.x;
      amin = this.y;
  }
  else{
      amax = this.y;
      amin = this.x;
  }

  if(this.z>=amax){
      ans = amax;}
  else if(this.z >= amin){
      ans = this.z;}
  else{
      ans = amin;}
 
 return ans;
}

Vec3.prototype.AreaOfTriangle = function(v0,v1,v2){
    var v01 = new Vec3(v1.x - v0.x ,v1.y - v0.y, v1.z - v0.z);
    var v02 = new Vec3(v2.x - v0.x ,v2.y - v0.y, v2.z - v0.z);
    
    var g = new Vec3(v01.y*v02.z - v01.y*v02.z,
		     v01.z*v02.x - v01.z*v02.x,
		     v01.x*v02.y - v01.x*v02.y,
		    );
    var Area = Math.sqrt(g.x*g.x + g.y*g.y + g.z*g.z);
    return Area/2;
}
