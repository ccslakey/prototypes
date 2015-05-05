function DiceCons(numSides){
	this.numSides = numSides;
	this.roll = function(){
		var myNum = Math.floor((Math.random()*(numSides))+1);
		console.log("Your roll was ", myNum);
	}};
    

    function Starship(model, owner){
	this.owner = owner;
	this.model = model;
	this.speed = 0;
	this.topSped;
 } 
	Starship.prototype.setTopSpeed = function(topSpeed){
		this.topSped = topSpeed;
		return this.topSped
	}
	Starship.prototype.getTopSpeed = function(){
		return this.topSped;
	}
	Starship.prototype.accelerateTo = function(accel){
		if (accel> topSped){
			console.log("NO!! You'll hurt the ship!")
		}
		else{
			this.speed = accel;
			return this.speed;
		}
};

function Radio(owner, signalType){
	this.owner = owner
	this.signalType = signalType
}

Radio.prototype.setStation = function(wav){
	if ((wav<88) || ((wav > 108 ) && (wav<535)) ||(wav > 1705)){
		console.log("Bad frequencies! FM is 88-108, AM is 535-1705")
}
	else{
	this.signal = wav
	if((this.signal>87)&&(this.signal<109)){
	this.signalType = 'FM'
}
	else if((this.signal>534)&&(this.signal<1706)){
		this.signalType = 'AM'
	}
}
	return this.signal+this.signalType;
}
	

Radio.prototype.listen = function(){
	if(this.signalType = 'AM'){
		return "distorted";
	}
	else if(this.signalType='FM'){
		return "clear";
	}
}

Radio.prototype.toggleSignal = function(){
	var newFM = Math.floor(Math.random() * (108 - 88 + 1)) + 88;
	var newAM = Math.floor(Math.random() * (1705 - 535 + 1)) + 535;
	var oldSignal = this.signal
	var oldSigType = this.signalType
	if(this.signalType === 'AM'){
		 this.signal = newFM;
		 this.signalType = 'FM';
		 return this.signal+this.signalType+ " is your new station, switched from "+oldSignal+oldSigType;
	}
	if(this.signalType === 'FM'){
		 this.signal = newAM;
		 this.signalType = 'AM';
		 return this.signal+this.signalType+ " is your new station, switched from "+oldSignal+oldSigType;
	}
}
