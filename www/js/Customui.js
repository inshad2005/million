var exec = require('cordova/exec');

function Customui() {

}

  Customui.prototype.setUrl = function(url,successCallback,failCallback){
                     var arr = [];
                     arr[0] = url;
                     exec(successCallback,failCallback,"Customui","seturl",arr);
                }

                    Customui.prototype.loginUsername = function(siteurl,username,password,successCallback,failCallback){
                     var arr = [];

                     arr[0] = siteurl;
                     arr[1] = username;
                      arr[2] = password;
                     exec(successCallback,failCallback,"Customui","loginUsername",arr);

                }

                Customui.prototype.loginUserid = function(siteurl,userid,successCallback,failCallback){

                     var arr = [];

                     arr[0] = siteurl;
                     arr[1] = userid;
                     exec(successCallback,failCallback,"Customui","loginUserid",arr);

                }

                Customui.prototype.guestLogin = function(siteurl,guestname,successCallback,failCallback){
                  var arr = [];

                      arr[0] = siteurl;
                      arr[1] = guestname;
                     exec(successCallback,failCallback,"Customui","guestLogin",arr);

                }

                Customui.prototype.setCometChatURL = function(url,successCallback,failCallback){
                     var arr = [];
                     arr[0] = url;
                     exec(successCallback,failCallback,"Customui","setCometChatURL",arr);

                }

                Customui.prototype.createUser = function(username,password,link,avatar,displayname,successCallback,failCallback){
                     var arr = [];

                     arr[0] = username;
                     arr[1] = password;
                     arr[2] = link;
                     arr[3] = avatar;
                     arr[4] = displayname;
                exec(successCallback,failCallback,"Customui","createUser",arr);

                }

                Customui.prototype.removeUserByID = function(userid,successCallback,failCallback){

                     var arr = [];
                    arr[0] = userid;


                exec(successCallback,failCallback,"Customui","removeUserByID",arr);

                }

                Customui.prototype.updateDisplayName = function(displayname,newPassword,link,avatarPath,userID,originalPassword,flag,successCallback,failCallback){

                     var arr = [];

                     arr[0] = displayname;
                     arr[1] = newPassword;
                     arr[2] = link;
                     arr[3] = avatarPath;
                     arr[4] = userID;
                     arr[5] = originalPassword;
                     arr[6] = flag;
                exec(successCallback,failCallback,"Customui","updateDisplayName",arr);

                }

                Customui.prototype.addFriends = function(userIDArray,successCallback,failCallback){

                     var arr = [];

                    arr[0] = userIDArray;

                exec(successCallback,failCallback,"Customui","addFriends",arr);

                }

                Customui.prototype.removeFriends = function(userIDArray,successCallback,failCallback){

                var arr = [];

                arr[0] = userIDArray;

                exec(successCallback,failCallback,"Customui","removeFriends",arr);

                }

                Customui.prototype.subscribe = function(flag,successCallback,failCallback){

                     var arr = [];
                     arr[0] = flag;

                exec(successCallback,failCallback,"Customui","subscribe",arr);

                }

                Customui.prototype.sendMessage = function(message,userID,successCallback,failCallback){

                var arr = [];
                arr[0] = message;
                arr[1] = userID;

                exec(successCallback,failCallback,"Customui","sendMessage",arr);

                }

                Customui.prototype.sendImageWithPath = function(imagePath,userID,successCallback,failCallback){

                var arr = [];
                arr[0] = imagePath;
                arr[1] = userID;

                exec(successCallback,failCallback,"Customui","sendImageWithPath",arr);

                }


                Customui.prototype.sendAudioWithPath = function(audioPath,userID,successCallback,failCallback){

                var arr = [];
                arr[0] = audioPath;
                arr[1] = userID;

                exec(successCallback,failCallback,"Customui","sendAudioWithPath",arr);

                }

                Customui.prototype.sendFileWithPath = function(filePath,userID,successCallback,failCallback){

                var arr = [];
                arr[0] = filePath;
                arr[1] = userID;

                exec(successCallback,failCallback,"Customui","sendFileWithPath",arr);

                }

                Customui.prototype.sendVideoWithPath = function(videoPath,userID,successCallback,failCallback){

                var arr = [];
                arr[0] = videoPath;
                arr[1] = userID;

                exec(successCallback,failCallback,"Customui","sendVideoWithPath",arr);

                }

                Customui.prototype.sendWriteBoardAck = function(buddyID,successCallback,failCallback){

                var arr = [];
                arr[0] = buddyID;

                exec(successCallback,failCallback,"Customui","sendWriteBoardAck",arr);

                }

                Customui.prototype.setStatus = function(status,successCallback,failCallback){

                var arr = [];
                arr[0] = status;

                exec(successCallback,failCallback,"Customui","setStatus",arr);

                }

                Customui.prototype.setStatusMessage = function(statusMessage,successCallback,failCallback){

                var arr = [];
                arr[0] = status;

                exec(successCallback,failCallback,"Customui","setStatusMessage",arr);

                }

                Customui.prototype.getPluginInfo = function(successCallback,failCallback){

                var arr = [];

                exec(successCallback,failCallback,"Customui","getPluginInfo",arr);

                }

                Customui.prototype.getUserInfo = function(userId,successCallback,failCallback){

                var arr = [];
                arr[0] = userId;
                exec(successCallback,failCallback,"Customui","getUserInfo",arr);

                }

                Customui.prototype.getOnlineUsers = function(successCallback,failCallback){

                var arr = [];

                exec(successCallback,failCallback,"Customui","getOnlineUsers",arr);

                }

                Customui.prototype.getSinglePlayerGamesUrl = function(successCallback,failCallback){

                var arr = [];

                exec(successCallback,failCallback,"Customui","getSinglePlayerGamesUrl",arr);

                }

                Customui.prototype.getAllAnnouncements = function(successCallback,failCallback){

                var arr = [];

                exec(successCallback,failCallback,"Customui","getAllAnnouncements",arr);

                }

                Customui.prototype.blockUser = function(userId,successCallback,failCallback){

                var arr = [];
                arr[0] = userId;
                exec(successCallback,failCallback,"Customui","blockUser",arr);

                }

                Customui.prototype.unblockUser = function(userId,successCallback,failCallback){

                var arr = [];
                arr[0] = userId;
                exec(successCallback,failCallback,"Customui","unblockUser",arr);

                }

                Customui.prototype.deleteUserHistory = function(userId,successCallback,failCallback){

                var arr = [];
                arr[0] = userId;
                exec(successCallback,failCallback,"Customui","deleteUserHistory",arr);

                }

                Customui.prototype.getBlockedUserList = function(successCallback,failCallback){

                var arr = [];

                exec(successCallback,failCallback,"Customui","getBlockedUserList",arr);

                }

                Customui.prototype.getChatHistory = function(friendID,messageID,successCallback,failCallback){

                var arr = [];
                arr[0] = friendID;
                arr[1] = messageID;
                exec(successCallback,failCallback,"Customui","getChatHistory",arr);

                }

                Customui.prototype.setTranslateLanguage = function(language,successCallback,failCallback){

                var arr = [];
                arr[0] = language;

                exec(successCallback,failCallback,"Customui","setTranslateLanguage",arr);

                }

                Customui.prototype.unsubscribe = function(successCallback,failCallback){

                var arr = [];

                exec(successCallback,failCallback,"Customui","unsubscribe",arr);

                }

                Customui.prototype.logoutWithSuccess = function(successCallback,failCallback){

                var arr = [];

                exec(successCallback,failCallback,"Customui","logout",arr);

                }

                Customui.prototype.getSDKVersion = function(successCallback,failCallback){

                var arr = [];

                exec(successCallback,failCallback,"Customui","getSDKVersion",arr);

                }

                Customui.prototype.isCometChatInstalled = function(siteURL,successCallback,failCallback){

                var arr = [];
                arr[0] = siteURL;
                exec(successCallback,failCallback,"Customui","isCometChatInstalled",arr);

                }

                Customui.prototype.isTyping = function(flag,channel,successCallback,failCallback){

                var arr = [];
                arr[0] = flag;
                arr[1] = channel;
                exec(successCallback,failCallback,"Customui","isTyping",arr);

                }

                Customui.prototype.sendDeliverdReceipt = function(msgID,channel,successCallback,failCallback){

                var arr = [];
                arr[0] = msgID;
                arr[1] = channel;
                exec(successCallback,failCallback,"Customui","sendDeliverdReceipt",arr);

                }

                Customui.prototype.sendReadReceipt = function(msgID,channel,successCallback,failCallback){

                var arr = [];
                arr[0] = msgID;
                arr[1] = channel;
                exec(successCallback,failCallback,"Customui","sendReadReceipt",arr);

                }

                /*======= Chatroom ========*/

                Customui.prototype.subscribeToChatroomWithMode = function(mode,successCallback,failCallback){

                var arr = [];
                arr[0] = mode;

                exec(successCallback,failCallback,"Customui","subscribeToChatroomWithMode",arr);

                }

                Customui.prototype.joinChatroom = function(chatroomName,chatroomID,chatroomPassword,successCallback,failCallback){

                var arr = [];
                arr[0] = chatroomName;
                arr[1] = chatroomID;
                arr[2] = chatroomPassword;

                exec(successCallback,failCallback,"Customui","joinChatroom",arr);

                }

                Customui.prototype.createChatRoom = function(chatroomName,type,chatroomPassword,successCallback,failCallback){

                var arr = [];
                arr[0] = chatroomName;
                arr[1] = type;
                arr[2] = chatroomPassword;

                exec(successCallback,failCallback,"Customui","createChatRoom",arr);

                }

                Customui.prototype.deleteChatRoom = function(chatroomID,successCallback,failCallback){

                var arr = [];
                arr[0] = chatroomID;


                exec(successCallback,failCallback,"Customui","deleteChatRoom",arr);

                }

                Customui.prototype.inviteUsers = function(usersID,successCallback,failCallback){

                var arr = [];
                arr[0] = usersID;


                exec(successCallback,failCallback,"Customui","inviteUsers",arr);

                }

                Customui.prototype.sendChatroomMessage = function(message,chatroomID,successCallback,failCallback){

                var arr = [];
                arr[0] = message;
                arr[1] = chatroomID;


                exec(successCallback,failCallback,"Customui","sendChatroomMessage",arr);

                }

                Customui.prototype.sendChatroomStickers = function(sticker,successCallback,failCallback){

                var arr = [];
                arr[0] = sticker;


                exec(successCallback,failCallback,"Customui","sendChatroomStickers",arr);

                }

                Customui.prototype.sendImageWithPathChatroom = function(imagePath,successCallback,failCallback){

                var arr = [];
                arr[0] = imagePath;


                exec(successCallback,failCallback,"Customui","sendImageWithPathChatroom",arr);

                }

                Customui.prototype.sendImageWithDataChatroom = function(imageData,successCallback,failCallback){

                var arr = [];
                arr[0] = imageData;


                exec(successCallback,failCallback,"Customui","sendImageWithDataChatroom",arr);

                }

                Customui.prototype.sendAudioWithPathChatroom = function(audioPath,successCallback,failCallback){

                var arr = [];
                arr[0] = audioPath;


                exec(successCallback,failCallback,"Customui","sendAudioWithPathChatroom",arr);

                }

                Customui.prototype.sendVideoWithPathChatroom = function(videoPath,successCallback,failCallback){

                var arr = [];
                arr[0] = videoPath;


                exec(successCallback,failCallback,"Customui","sendVideoWithPathChatroom",arr);

                }

                Customui.prototype.sendVideoWithURLChatroom = function(videoURL,successCallback,failCallback){

                var arr = [];
                arr[0] = videoURL;


                exec(successCallback,failCallback,"Customui","sendVideoWithURLChatroom",arr);

                }

                Customui.prototype.sendFileWithPathChatroom = function(filePath,successCallback,failCallback){

                var arr = [];
                arr[0] = filePath;


                exec(successCallback,failCallback,"Customui","sendFileChatroom",arr);

                }

                Customui.prototype.getAllChatrooms = function(successCallback,failCallback){

                var arr = [];

                exec(successCallback,failCallback,"Customui","getAllChatrooms",arr);

                }

                Customui.prototype.leaveChatroom = function(successCallback,failCallback){

                var arr = [];

                exec(successCallback,failCallback,"Customui","leaveChatroom",arr);

                }

                Customui.prototype.unsubscribeFromChatRoom = function(successCallback,failCallback){

                var arr = [];

                exec(successCallback,failCallback,"Customui","unsubscribe",arr);

                }

                Customui.prototype.getCurrentChatroom = function(successCallback,failCallback){

                var arr = [];

                exec(successCallback,failCallback,"Customui","getCurrentChatroom",arr);

                }

                Customui.prototype.isSubscribedToChatroom = function(chatroomID,successCallback,failCallback){

                var arr = [];
                arr[0] = chatroomID;

                exec(successCallback,failCallback,"Customui","isSubscribedToChatroom",arr);

                }

                Customui.prototype.getSHA1ValueOfString = function(string,successCallback,failCallback){

                var arr = [];
                arr[0] = string;

                exec(successCallback,failCallback,"Customui","getSHA1ValueOfString",arr);

                }

 var customui = new Customui();
 module.exports = customui;
