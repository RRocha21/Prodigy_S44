.players_left_container>.player_container>.Round_Kills {
  z-index: 211;
  position: absolute;
  width: 16px;
  height: 38px;
  right: -5px;
  top: -5px;
  transform: all 0.5s ease 0.0s;
  overflow: hidden;
  -webkit-transform: all 0.5s ease 0.0s;
  -moz-transform: all 0.5s ease 0.0s;
  -ms-transform: all 0.5s ease 0.0s;
  -o-transform: all 0.5s ease 0.0s;
}

.players_left_container>.player_container>.Round_Kills>.background {
  background-color: rgb(47, 47, 47);
  position: absolute;
  width: 16px;
  height: 38px;
  left: 0px;
  top: 0px;
}

.players_left_container>.player_container>.Round_Kills>.icon {
  background-image: url(../../files/img/kills.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  /* filter: invert(1); */
  position: absolute;
  height: 14px;
  width: 14px;
  right: 1px;
  top: 3px;
}

.players_left_container>.player_container>.Round_Kills>.frags {
  font-size: 19px;
  text-transform: uppercase;
  font-family: 'Bebas Neue Pro';
  font-weight: bold;
  font-style: normal;
  color: rgb(236,236,236);
  font-weight: 700;
  line-height: 2.9;
  letter-spacing: 1;
  text-align: center;
  position: absolute;
  height: 38px;
  width: 16px;
  left: 0px;
  bottom: 0px;
}

/** LEFT SIDE **/

.players_left_container>.player_container>.diamond {
  width: 18px;
  height: 16px;
  left: 36px;
  bottom: -22px;
  background: #fff;
  position: absolute;
  text-align: center;
  background: rgb(47,47,47);
  z-index: 440;
  /* rotate: 45deg; */
}

.players_left_container>.player_container>.number {
  width: 18px;
  height: 16px;
  left: 36px;
  bottom: -21px;
  /* background: #fff; */
  position: absolute;
  text-align: center;
  color: rgb(236,236,236);
  font-size: 17px;
  font-family: 'HelveticaNowText';
  font-weight: bold;
  font-style: normal;
  z-index: 450;
  line-height: 1;
}

.players_left_container>.player_container {
  background-position: right;
  width: 96px;
  height: 220px;
  z-index: 208;
  position: absolute;
  transition: filter 0.5s ease 0.0s;
  transition: opacity 0.5s ease 0.0s;
}
.players_left_container>.player_container>.background {
  position: absolute;
  top: 0px;
  left: 0px;
  background-position: right;
  width: 96px;
  height: 220px;
  z-index: 45;
  position: absolute;
  /*border-radius: 10px;*/
  background: rgba(0,0,0,0.5);
  transition: filter 0.5s ease 0.0s;
  transition: opacity 0.5s ease 0.0s;
  /* clip-path: polygon(10% 0, 90% 0, 100% 5%, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 5%); */
  /* background-image: url(../../files/img/hud_elements/background_ct.png); */
  /* background: rgb(0,0,0); */
}

.players_left_container>.player_container>.photo_container {
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 96px;
  height: 150px;
  z-index: 210;
  /* background-color: rgb(236,236,236); */
  overflow: hidden;
}

.players_left_container>.player_container>.photo_container>.photo_player {
  position: absolute;
  /* bottom: 5px; */
  left: -27px;
  width: 150px;
  height: 150px;
  z-index: 211;
  align-items: center;
}

.players_left_container>.player_container>.photo_container>.photo_player img {
  position: absolute;
  opacity: 0.9;
  /* -webkit-mask-image: linear-gradient(0deg, transparent 0%, black 80%, transparent 100%); */
  bottom: 0%;
  left: 0%;
  height: 100%;
  z-index: 212;
}

.players_left_container>.player_container>.photo_container>.photo_player_shade {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 96px;
  height: 50px;
  z-index: 214;
  background: linear-gradient(0deg, rgba(47,47,47,0.9) 0%,rgba(47,47,47,0.9)65%, rgba(47,47,47,0) 100%);
}


.players_left_container>.player_container>.separator {
  width: 3px;
  height: 61px;
  top: 13px;
  z-index: 292;
  position: absolute;
  left: -3px;
  -webkit-mask-image: linear-gradient(0deg, transparent 0%, black 20%, black 80%, transparent 100%);
}


/** LEFT SIDE - IMAGES **/

.players_left_container>.player_container>.image_container {
  background-image: url(../../files/img/hud_elements/pic_background.png);
  height: 84px;
  width: 84px;
  position: absolute;
  left: 0px;
  top: 0px;
}

.players_left_container>.player_container>.image_container>.image {
  background-size: 90%;
  height: 84px;
  width: 84px;
  background-position: center;
  background-repeat: no-repeat;
}

.players_left_container>.player_container>.flash {
  width: 96px;
  height: 220px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 400;
  transition: all 0.4s ease-in-out 0s;
  background: rgba(255, 255, 255, 0);
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  -ms-transition: all 0.4s ease-in-out 0s;
  -o-transition: all 0.4s ease-in-out 0s;
}

/* .players_left_container>.player_container>.flash_2 {
  width: 74px;
  height: 74px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 220;
  transition: all 0.4s ease-in-out 0s;
  background: rgba(255, 255, 255, 0);
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  -ms-transition: all 0.4s ease-in-out 0s;
  -o-transition: all 0.4s ease-in-out 0s;
} */


/* LEFT SIDE - TOP BAR */

.players_left_container>.player_container>.top_bar {
  width: 96px;
  height: 220px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 60;
}

.players_left_container>.player_container>.top_bar>.health_bar {
  width: 96px;
  height: 220px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: 61;
  transition: width 0.4s ease-in-out 0s;
  -webkit-transition: height 0.4s ease-in-out 0s;
  -moz-transition: height 0.4s ease-in-out 0s;
  -ms-transition: height 0.4s ease-in-out 0s;
  -o-transition: height 0.4s ease-in-out 0s;
  /* clip-path: polygon(10% 0, 90% 0, 100% 5%, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 5%); */
}

.players_left_container>.player_container>.top_bar>.health_bar_bg {
  /* background: rgba(236, 236, 236, 0.9); */
  width: 96px;
  height: 220px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: 62;
  /*border-top-right-radius: 10px;
  border-top-left-radius: 10px;*/
}

.players_left_container>.player_container>.player_name {
  font-size: 14px;
  font-family: 'HelveticaNowText';
  font-style: normal;
  color: rgb(236, 236, 236);
  line-height: 1;
  font-weight: bold;
  letter-spacing: 2;
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  height: 16px;
  width: 96px;
  overflow: hidden;
}

.players_left_container>.player_container>.armor_background {
  position: absolute;
  left: 5px;
  bottom: 20px;
  z-index: 280;
  height: 19px;
  width: 38px;
  background:rgb(236, 236, 236);
  overflow: hidden;
}

.players_left_container>.player_container>.armor {
  position: absolute;
  left: 6px;
  bottom: 21px;
  background-image: url(../../files/img/armor.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 281;
  height: 16px;
  width: 16px;
  opacity: 0;
  filter: invert(1);
  -webkit-filter: invert(1);
}

.players_left_container>.player_container>.helmet {
  position: absolute;
  left: 26px;
  bottom: 22px;
  background-image: url(../../files/img/helmet.png);
  transform: scaleX(-1);
  filter: invert(1);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 281;
  height: 14px;
  width: 14px;
  opacity: 0;
  -webkit-filter: invert(1);
  -webkit-transform: scaleX(-1);
  -moz-transform: scaleX(-1);
  -ms-transform: scaleX(-1);
  -o-transform: scaleX(-1);
}

.players_left_container>.player_container>.bomb_defuse_background {
  background-color: rgb(236, 236, 236);
  position: absolute;
  right: 10px;
  top: 59px;
  z-index: 280;
  height: 15px;
  width: 15px;
}


.players_left_container>.player_container>.bomb_defuse {
  /*background-color: rgb(236, 236, 236);
  */position: absolute;
  right: 9px;
  filter: invert(1);
  top: 61px;
  z-index: 281;
  height: 14px;
  width: 14px;
  -webkit-filter:;
}

.players_left_container>.player_container>.health_icon {
  position: absolute;
  right: 1px;
  top: 181px;
  z-index: 282;
  height: 19px;
  width: 19px;
  background-image: url(../../../files/img/hp.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.players_left_container>.player_container>.health_text {
  font-size: 19px;
  font-family: 'Bebas Neue Pro';
  font-weight: bold;
  font-style: normal;
  color: rgb(236, 236, 236);
  /* font-weight: 900; */
  text-transform: uppercase;
  line-height: 1.4;
  text-align: right;
  position: absolute;
  left: 40px;
  top: 177px;
  z-index: 283;
  height: 27px;
  width: 38px;
  letter-spacing: 3;
}

.players_left_container>.player_container>.top_bar>.weapon_icon {
  position: absolute;
  top: 6px;
  right: 12px;
  height: 16px;
  width: 55px;
  z-index: 500;
}

.players_left_container>.player_container>.top_bar>.weapon_icon img {
  max-width: 100%;
  max-height: 100%;
  margin-right: 4px;
}


/** LEFT SIDE - BOTTOM BAR **/

.players_left_container>.player_container>.bottom_bar {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 220px;
  width: 96px;
  z-index: 60;
  /* background-color: #000; */
}


/** LEFT SIDE - WEAPONS **/

.players_left_container>.player_container>.bottom_bar>.grenades {
  position: absolute;
  top: 8px;
  left: 18px;
  height: 15px;
  width: 70px;
  align-items: center;
  justify-content: center;
  /* align-content: center; */
}

.players_left_container>.player_container>.bottom_bar>.grenades img {
  max-width: 100%;
  max-height: 100%;
  margin-right: 6px;
}

.players_left_container>.player_container>.bottom_bar>.weapon_icon {
  position: absolute;
  background-color: url("../../files/img/weapons/m4a1_silencer.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  filter: invert(100%);
  top: -30px;
  right: 3px;
  height: 23px;
  width: 90px;
  -webkit-filter: invert(100%);
}



/** LEFT SIDE - MONEY & STATS **/

.players_left_container>.player_container>.bottom_bar>.moneys {
  font-size: 12px;
  font-family: 'HelveticaNowText';
  font-weight: 600;
  font-style: normal;
  color:rgba(236, 236, 236);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.3;
  text-align: center;
  position: absolute;
  left: 10px;
  top: 59px;
  z-index: 293;
  height: 12px;
  width: 61px;
  letter-spacing: 1.8;
}

.players_left_container>.player_container>.bottom_bar>.moneys_background { 
  position: absolute;
  left: 10px;
  top: 59px;
  z-index: 292;
  height: 15px;
  width: 61px;
  z-index: 292;
  background-color: rgba(47,47,47);
}


.players_left_container>.player_container>.bottom_bar>.k_icon {
  background-image: url(../../files/img/kills.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
  left: 5px;
  top: 34px;
  z-index: 283;
  height: 16px;
  width: 16px;
}

.players_left_container>.player_container>.bottom_bar>.d_icon {
  background-image: url(../../files/img/deaths.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
  top: 33px;
  left: 50px;
  z-index: 283;
  height: 17px;
  width: 16px;
}

.players_left_container>.player_container>.bottom_bar>.k {
  font-size: 19px;
  font-family: 'Bebas Neue Pro';
  font-weight: bold;
  font-style: normal;
  color: rgb(236,236,236);
  text-transform: uppercase;
  /* font-weight: 600; */
  letter-spacing: 2;
  line-height: 1;
  text-align: left;
  position: absolute;
  left: 26px;
  top: 32px;
  z-index: 283;
  height: 25px;
  width: 20px;
}

.players_left_container>.player_container>.bottom_bar>.d {
  font-size: 19px;
  font-family: 'Bebas Neue Pro';
  font-weight: bold;
  font-style: normal;
  color: rgb(236,236,236);
  text-transform: uppercase;
  /* font-weight: 600; */
  letter-spacing: 2;
  line-height: 1;
  text-align: left;
  position: absolute;
  top: 32px;
  left: 72px;
  z-index: 283;
  height: 25px;
  width: 20px;
}