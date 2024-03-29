const fs = require('fs/promises');

const order = `
U+1F600 ; 6.1 # 😀 grinning face
U+1F603 ; 6.0 # 😃 grinning face with big eyes
U+1F604 ; 6.0 # 😄 grinning face with smiling eyes
U+1F601 ; 6.0 # 😁 beaming face with smiling eyes
U+1F606 ; 6.0 # 😆 grinning squinting face
U+1F605 ; 6.0 # 😅 grinning face with sweat
U+1F923 ; 9.0 # 🤣 rolling on the floor laughing
U+1F602 ; 6.0 # 😂 face with tears of joy
U+1F642 ; 7.0 # 🙂 slightly smiling face
U+1F643 ; 8.0 # 🙃 upside-down face
U+1F609 ; 6.0 # 😉 winking face
U+1F60A ; 6.0 # 😊 smiling face with smiling eyes
U+1F607 ; 6.0 # 😇 smiling face with halo
U+1F970 ; 11.0 # 🥰 smiling face with hearts
U+1F60D ; 6.0 # 😍 smiling face with heart-eyes
U+1F929 ; 10.0 # 🤩 star-struck
U+1F618 ; 6.0 # 😘 face blowing a kiss
U+1F617 ; 6.1 # 😗 kissing face
U+263A ; 1.1 # ☺ smiling face
U+1F61A ; 6.0 # 😚 kissing face with closed eyes
U+1F619 ; 6.1 # 😙 kissing face with smiling eyes
U+1F60B ; 6.0 # 😋 face savoring food
U+1F61B ; 6.1 # 😛 face with tongue
U+1F61C ; 6.0 # 😜 winking face with tongue
U+1F92A ; 10.0 # 🤪 zany face
U+1F61D ; 6.0 # 😝 squinting face with tongue
U+1F911 ; 8.0 # 🤑 money-mouth face
U+1F917 ; 8.0 # 🤗 hugging face
U+1F92D ; 10.0 # 🤭 face with hand over mouth
U+1F92B ; 10.0 # 🤫 shushing face
U+1F914 ; 8.0 # 🤔 thinking face
U+1F910 ; 8.0 # 🤐 zipper-mouth face
U+1F928 ; 10.0 # 🤨 face with raised eyebrow
U+1F610 ; 6.0 # 😐 neutral face
U+1F611 ; 6.1 # 😑 expressionless face
U+1F636 ; 6.0 # 😶 face without mouth
U+1F60F ; 6.0 # 😏 smirking face
U+1F612 ; 6.0 # 😒 unamused face
U+1F644 ; 8.0 # 🙄 face with rolling eyes
U+1F62C ; 6.1 # 😬 grimacing face
U+1F925 ; 9.0 # 🤥 lying face
U+1F60C ; 6.0 # 😌 relieved face
U+1F614 ; 6.0 # 😔 pensive face
U+1F62A ; 6.0 # 😪 sleepy face
U+1F924 ; 9.0 # 🤤 drooling face
U+1F634 ; 6.1 # 😴 sleeping face
U+1F637 ; 6.0 # 😷 face with medical mask
U+1F912 ; 8.0 # 🤒 face with thermometer
U+1F915 ; 8.0 # 🤕 face with head-bandage
U+1F922 ; 9.0 # 🤢 nauseated face
U+1F92E ; 10.0 # 🤮 face vomiting
U+1F927 ; 9.0 # 🤧 sneezing face
U+1F975 ; 11.0 # 🥵 hot face
U+1F976 ; 11.0 # 🥶 cold face
U+1F974 ; 11.0 # 🥴 woozy face
U+1F635 ; 6.0 # 😵 dizzy face
U+1F92F ; 10.0 # 🤯 exploding head
U+1F920 ; 9.0 # 🤠 cowboy hat face
U+1F973 ; 11.0 # 🥳 partying face
U+1F60E ; 6.0 # 😎 smiling face with sunglasses
U+1F913 ; 8.0 # 🤓 nerd face
U+1F9D0 ; 10.0 # 🧐 face with monocle
U+1F615 ; 6.1 # 😕 confused face
U+1F61F ; 6.1 # 😟 worried face
U+1F641 ; 7.0 # 🙁 slightly frowning face
U+2639 ; 1.1 # ☹ frowning face
U+1F62E ; 6.1 # 😮 face with open mouth
U+1F62F ; 6.1 # 😯 hushed face
U+1F632 ; 6.0 # 😲 astonished face
U+1F633 ; 6.0 # 😳 flushed face
U+1F97A ; 11.0 # 🥺 pleading face
U+1F626 ; 6.1 # 😦 frowning face with open mouth
U+1F627 ; 6.1 # 😧 anguished face
U+1F628 ; 6.0 # 😨 fearful face
U+1F630 ; 6.0 # 😰 anxious face with sweat
U+1F625 ; 6.0 # 😥 sad but relieved face
U+1F622 ; 6.0 # 😢 crying face
U+1F62D ; 6.0 # 😭 loudly crying face
U+1F631 ; 6.0 # 😱 face screaming in fear
U+1F616 ; 6.0 # 😖 confounded face
U+1F623 ; 6.0 # 😣 persevering face
U+1F61E ; 6.0 # 😞 disappointed face
U+1F613 ; 6.0 # 😓 downcast face with sweat
U+1F629 ; 6.0 # 😩 weary face
U+1F62B ; 6.0 # 😫 tired face
U+1F971 ; 12.0 # 🥱 yawning face
U+1F624 ; 6.0 # 😤 face with steam from nose
U+1F621 ; 6.0 # 😡 pouting face
U+1F620 ; 6.0 # 😠 angry face
U+1F92C ; 10.0 # 🤬 face with symbols on mouth
U+1F608 ; 6.0 # 😈 smiling face with horns
U+1F47F ; 6.0 # 👿 angry face with horns
U+1F480 ; 6.0 # 💀 skull
U+2620 ; 1.1 # ☠ skull and crossbones
U+1F4A9 ; 6.0 # 💩 pile of poo
U+1F921 ; 9.0 # 🤡 clown face
U+1F479 ; 6.0 # 👹 ogre
U+1F47A ; 6.0 # 👺 goblin
U+1F47B ; 6.0 # 👻 ghost
U+1F47D ; 6.0 # 👽 alien
U+1F47E ; 6.0 # 👾 alien monster
U+1F916 ; 8.0 # 🤖 robot
U+1F63A ; 6.0 # 😺 grinning cat
U+1F638 ; 6.0 # 😸 grinning cat with smiling eyes
U+1F639 ; 6.0 # 😹 cat with tears of joy
U+1F63B ; 6.0 # 😻 smiling cat with heart-eyes
U+1F63C ; 6.0 # 😼 cat with wry smile
U+1F63D ; 6.0 # 😽 kissing cat
U+1F640 ; 6.0 # 🙀 weary cat
U+1F63F ; 6.0 # 😿 crying cat
U+1F63E ; 6.0 # 😾 pouting cat
U+1F648 ; 6.0 # 🙈 see-no-evil monkey
U+1F649 ; 6.0 # 🙉 hear-no-evil monkey
U+1F64A ; 6.0 # 🙊 speak-no-evil monkey
U+1F48B ; 6.0 # 💋 kiss mark
U+1F48C ; 6.0 # 💌 love letter
U+1F498 ; 6.0 # 💘 heart with arrow
U+1F49D ; 6.0 # 💝 heart with ribbon
U+1F496 ; 6.0 # 💖 sparkling heart
U+1F497 ; 6.0 # 💗 growing heart
U+1F493 ; 6.0 # 💓 beating heart
U+1F49E ; 6.0 # 💞 revolving hearts
U+1F495 ; 6.0 # 💕 two hearts
U+1F49F ; 6.0 # 💟 heart decoration
U+2763 ; 1.1 # ❣ heart exclamation
U+1F494 ; 6.0 # 💔 broken heart
U+2764 ; 1.1 # ❤ red heart
U+1F9E1 ; 10.0 # 🧡 orange heart
U+1F49B ; 6.0 # 💛 yellow heart
U+1F49A ; 6.0 # 💚 green heart
U+1F499 ; 6.0 # 💙 blue heart
U+1F49C ; 6.0 # 💜 purple heart
U+1F90E ; 12.0 # 🤎 brown heart
U+1F5A4 ; 9.0 # 🖤 black heart
U+1F90D ; 12.0 # 🤍 white heart
U+1F4AF ; 6.0 # 💯 hundred points
U+1F4A2 ; 6.0 # 💢 anger symbol
U+1F4A5 ; 6.0 # 💥 collision
U+1F4AB ; 6.0 # 💫 dizzy
U+1F4A6 ; 6.0 # 💦 sweat droplets
U+1F4A8 ; 6.0 # 💨 dashing away
U+1F573 ; 7.0 # 🕳 hole
U+1F4A3 ; 6.0 # 💣 bomb
U+1F4AC ; 6.0 # 💬 speech balloon
U+1F441 U+FE0F U+200D U+1F5E8 U+FE0F ; 7.0 # 👁️‍🗨️ eye in speech bubble
U+1F5E8 ; 7.0 # 🗨 left speech bubble
U+1F5EF ; 7.0 # 🗯 right anger bubble
U+1F4AD ; 6.0 # 💭 thought balloon
U+1F4A4 ; 6.0 # 💤 zzz
U+1F44B ; 6.0 # 👋 waving hand
U+1F44B U+1F3FB ; 8.0 # 👋🏻 waving hand: light skin tone
U+1F44B U+1F3FC ; 8.0 # 👋🏼 waving hand: medium-light skin tone
U+1F44B U+1F3FD ; 8.0 # 👋🏽 waving hand: medium skin tone
U+1F44B U+1F3FE ; 8.0 # 👋🏾 waving hand: medium-dark skin tone
U+1F44B U+1F3FF ; 8.0 # 👋🏿 waving hand: dark skin tone
U+1F91A ; 9.0 # 🤚 raised back of hand
U+1F91A U+1F3FB ; 9.0 # 🤚🏻 raised back of hand: light skin tone
U+1F91A U+1F3FC ; 9.0 # 🤚🏼 raised back of hand: medium-light skin tone
U+1F91A U+1F3FD ; 9.0 # 🤚🏽 raised back of hand: medium skin tone
U+1F91A U+1F3FE ; 9.0 # 🤚🏾 raised back of hand: medium-dark skin tone
U+1F91A U+1F3FF ; 9.0 # 🤚🏿 raised back of hand: dark skin tone
U+1F590 ; 7.0 # 🖐 hand with fingers splayed
U+1F590 U+1F3FB ; 8.0 # 🖐🏻 hand with fingers splayed: light skin tone
U+1F590 U+1F3FC ; 8.0 # 🖐🏼 hand with fingers splayed: medium-light skin tone
U+1F590 U+1F3FD ; 8.0 # 🖐🏽 hand with fingers splayed: medium skin tone
U+1F590 U+1F3FE ; 8.0 # 🖐🏾 hand with fingers splayed: medium-dark skin tone
U+1F590 U+1F3FF ; 8.0 # 🖐🏿 hand with fingers splayed: dark skin tone
U+270B ; 6.0 # ✋ raised hand
U+270B U+1F3FB ; 8.0 # ✋🏻 raised hand: light skin tone
U+270B U+1F3FC ; 8.0 # ✋🏼 raised hand: medium-light skin tone
U+270B U+1F3FD ; 8.0 # ✋🏽 raised hand: medium skin tone
U+270B U+1F3FE ; 8.0 # ✋🏾 raised hand: medium-dark skin tone
U+270B U+1F3FF ; 8.0 # ✋🏿 raised hand: dark skin tone
U+1F596 ; 7.0 # 🖖 vulcan salute
U+1F596 U+1F3FB ; 8.0 # 🖖🏻 vulcan salute: light skin tone
U+1F596 U+1F3FC ; 8.0 # 🖖🏼 vulcan salute: medium-light skin tone
U+1F596 U+1F3FD ; 8.0 # 🖖🏽 vulcan salute: medium skin tone
U+1F596 U+1F3FE ; 8.0 # 🖖🏾 vulcan salute: medium-dark skin tone
U+1F596 U+1F3FF ; 8.0 # 🖖🏿 vulcan salute: dark skin tone
U+1F44C ; 6.0 # 👌 OK hand
U+1F44C U+1F3FB ; 8.0 # 👌🏻 OK hand: light skin tone
U+1F44C U+1F3FC ; 8.0 # 👌🏼 OK hand: medium-light skin tone
U+1F44C U+1F3FD ; 8.0 # 👌🏽 OK hand: medium skin tone
U+1F44C U+1F3FE ; 8.0 # 👌🏾 OK hand: medium-dark skin tone
U+1F44C U+1F3FF ; 8.0 # 👌🏿 OK hand: dark skin tone
U+1F90F ; 12.0 # 🤏 pinching hand
U+1F90F U+1F3FB ; 12.0 # 🤏🏻 pinching hand: light skin tone
U+1F90F U+1F3FC ; 12.0 # 🤏🏼 pinching hand: medium-light skin tone
U+1F90F U+1F3FD ; 12.0 # 🤏🏽 pinching hand: medium skin tone
U+1F90F U+1F3FE ; 12.0 # 🤏🏾 pinching hand: medium-dark skin tone
U+1F90F U+1F3FF ; 12.0 # 🤏🏿 pinching hand: dark skin tone
U+270C ; 1.1 # ✌ victory hand
U+270C U+1F3FB ; 8.0 # ✌🏻 victory hand: light skin tone
U+270C U+1F3FC ; 8.0 # ✌🏼 victory hand: medium-light skin tone
U+270C U+1F3FD ; 8.0 # ✌🏽 victory hand: medium skin tone
U+270C U+1F3FE ; 8.0 # ✌🏾 victory hand: medium-dark skin tone
U+270C U+1F3FF ; 8.0 # ✌🏿 victory hand: dark skin tone
U+1F91E ; 9.0 # 🤞 crossed fingers
U+1F91E U+1F3FB ; 9.0 # 🤞🏻 crossed fingers: light skin tone
U+1F91E U+1F3FC ; 9.0 # 🤞🏼 crossed fingers: medium-light skin tone
U+1F91E U+1F3FD ; 9.0 # 🤞🏽 crossed fingers: medium skin tone
U+1F91E U+1F3FE ; 9.0 # 🤞🏾 crossed fingers: medium-dark skin tone
U+1F91E U+1F3FF ; 9.0 # 🤞🏿 crossed fingers: dark skin tone
U+1F91F ; 10.0 # 🤟 love-you gesture
U+1F91F U+1F3FB ; 10.0 # 🤟🏻 love-you gesture: light skin tone
U+1F91F U+1F3FC ; 10.0 # 🤟🏼 love-you gesture: medium-light skin tone
U+1F91F U+1F3FD ; 10.0 # 🤟🏽 love-you gesture: medium skin tone
U+1F91F U+1F3FE ; 10.0 # 🤟🏾 love-you gesture: medium-dark skin tone
U+1F91F U+1F3FF ; 10.0 # 🤟🏿 love-you gesture: dark skin tone
U+1F918 ; 8.0 # 🤘 sign of the horns
U+1F918 U+1F3FB ; 8.0 # 🤘🏻 sign of the horns: light skin tone
U+1F918 U+1F3FC ; 8.0 # 🤘🏼 sign of the horns: medium-light skin tone
U+1F918 U+1F3FD ; 8.0 # 🤘🏽 sign of the horns: medium skin tone
U+1F918 U+1F3FE ; 8.0 # 🤘🏾 sign of the horns: medium-dark skin tone
U+1F918 U+1F3FF ; 8.0 # 🤘🏿 sign of the horns: dark skin tone
U+1F919 ; 9.0 # 🤙 call me hand
U+1F919 U+1F3FB ; 9.0 # 🤙🏻 call me hand: light skin tone
U+1F919 U+1F3FC ; 9.0 # 🤙🏼 call me hand: medium-light skin tone
U+1F919 U+1F3FD ; 9.0 # 🤙🏽 call me hand: medium skin tone
U+1F919 U+1F3FE ; 9.0 # 🤙🏾 call me hand: medium-dark skin tone
U+1F919 U+1F3FF ; 9.0 # 🤙🏿 call me hand: dark skin tone
U+1F448 ; 6.0 # 👈 backhand index pointing left
U+1F448 U+1F3FB ; 8.0 # 👈🏻 backhand index pointing left: light skin tone
U+1F448 U+1F3FC ; 8.0 # 👈🏼 backhand index pointing left: medium-light skin tone
U+1F448 U+1F3FD ; 8.0 # 👈🏽 backhand index pointing left: medium skin tone
U+1F448 U+1F3FE ; 8.0 # 👈🏾 backhand index pointing left: medium-dark skin tone
U+1F448 U+1F3FF ; 8.0 # 👈🏿 backhand index pointing left: dark skin tone
U+1F449 ; 6.0 # 👉 backhand index pointing right
U+1F449 U+1F3FB ; 8.0 # 👉🏻 backhand index pointing right: light skin tone
U+1F449 U+1F3FC ; 8.0 # 👉🏼 backhand index pointing right: medium-light skin tone
U+1F449 U+1F3FD ; 8.0 # 👉🏽 backhand index pointing right: medium skin tone
U+1F449 U+1F3FE ; 8.0 # 👉🏾 backhand index pointing right: medium-dark skin tone
U+1F449 U+1F3FF ; 8.0 # 👉🏿 backhand index pointing right: dark skin tone
U+1F446 ; 6.0 # 👆 backhand index pointing up
U+1F446 U+1F3FB ; 8.0 # 👆🏻 backhand index pointing up: light skin tone
U+1F446 U+1F3FC ; 8.0 # 👆🏼 backhand index pointing up: medium-light skin tone
U+1F446 U+1F3FD ; 8.0 # 👆🏽 backhand index pointing up: medium skin tone
U+1F446 U+1F3FE ; 8.0 # 👆🏾 backhand index pointing up: medium-dark skin tone
U+1F446 U+1F3FF ; 8.0 # 👆🏿 backhand index pointing up: dark skin tone
U+1F595 ; 7.0 # 🖕 middle finger
U+1F595 U+1F3FB ; 8.0 # 🖕🏻 middle finger: light skin tone
U+1F595 U+1F3FC ; 8.0 # 🖕🏼 middle finger: medium-light skin tone
U+1F595 U+1F3FD ; 8.0 # 🖕🏽 middle finger: medium skin tone
U+1F595 U+1F3FE ; 8.0 # 🖕🏾 middle finger: medium-dark skin tone
U+1F595 U+1F3FF ; 8.0 # 🖕🏿 middle finger: dark skin tone
U+1F447 ; 6.0 # 👇 backhand index pointing down
U+1F447 U+1F3FB ; 8.0 # 👇🏻 backhand index pointing down: light skin tone
U+1F447 U+1F3FC ; 8.0 # 👇🏼 backhand index pointing down: medium-light skin tone
U+1F447 U+1F3FD ; 8.0 # 👇🏽 backhand index pointing down: medium skin tone
U+1F447 U+1F3FE ; 8.0 # 👇🏾 backhand index pointing down: medium-dark skin tone
U+1F447 U+1F3FF ; 8.0 # 👇🏿 backhand index pointing down: dark skin tone
U+261D ; 1.1 # ☝ index pointing up
U+261D U+1F3FB ; 8.0 # ☝🏻 index pointing up: light skin tone
U+261D U+1F3FC ; 8.0 # ☝🏼 index pointing up: medium-light skin tone
U+261D U+1F3FD ; 8.0 # ☝🏽 index pointing up: medium skin tone
U+261D U+1F3FE ; 8.0 # ☝🏾 index pointing up: medium-dark skin tone
U+261D U+1F3FF ; 8.0 # ☝🏿 index pointing up: dark skin tone
U+1F44D ; 6.0 # 👍 thumbs up
U+1F44D U+1F3FB ; 8.0 # 👍🏻 thumbs up: light skin tone
U+1F44D U+1F3FC ; 8.0 # 👍🏼 thumbs up: medium-light skin tone
U+1F44D U+1F3FD ; 8.0 # 👍🏽 thumbs up: medium skin tone
U+1F44D U+1F3FE ; 8.0 # 👍🏾 thumbs up: medium-dark skin tone
U+1F44D U+1F3FF ; 8.0 # 👍🏿 thumbs up: dark skin tone
U+1F44E ; 6.0 # 👎 thumbs down
U+1F44E U+1F3FB ; 8.0 # 👎🏻 thumbs down: light skin tone
U+1F44E U+1F3FC ; 8.0 # 👎🏼 thumbs down: medium-light skin tone
U+1F44E U+1F3FD ; 8.0 # 👎🏽 thumbs down: medium skin tone
U+1F44E U+1F3FE ; 8.0 # 👎🏾 thumbs down: medium-dark skin tone
U+1F44E U+1F3FF ; 8.0 # 👎🏿 thumbs down: dark skin tone
U+270A ; 6.0 # ✊ raised fist
U+270A U+1F3FB ; 8.0 # ✊🏻 raised fist: light skin tone
U+270A U+1F3FC ; 8.0 # ✊🏼 raised fist: medium-light skin tone
U+270A U+1F3FD ; 8.0 # ✊🏽 raised fist: medium skin tone
U+270A U+1F3FE ; 8.0 # ✊🏾 raised fist: medium-dark skin tone
U+270A U+1F3FF ; 8.0 # ✊🏿 raised fist: dark skin tone
U+1F44A ; 6.0 # 👊 oncoming fist
U+1F44A U+1F3FB ; 8.0 # 👊🏻 oncoming fist: light skin tone
U+1F44A U+1F3FC ; 8.0 # 👊🏼 oncoming fist: medium-light skin tone
U+1F44A U+1F3FD ; 8.0 # 👊🏽 oncoming fist: medium skin tone
U+1F44A U+1F3FE ; 8.0 # 👊🏾 oncoming fist: medium-dark skin tone
U+1F44A U+1F3FF ; 8.0 # 👊🏿 oncoming fist: dark skin tone
U+1F91B ; 9.0 # 🤛 left-facing fist
U+1F91B U+1F3FB ; 9.0 # 🤛🏻 left-facing fist: light skin tone
U+1F91B U+1F3FC ; 9.0 # 🤛🏼 left-facing fist: medium-light skin tone
U+1F91B U+1F3FD ; 9.0 # 🤛🏽 left-facing fist: medium skin tone
U+1F91B U+1F3FE ; 9.0 # 🤛🏾 left-facing fist: medium-dark skin tone
U+1F91B U+1F3FF ; 9.0 # 🤛🏿 left-facing fist: dark skin tone
U+1F91C ; 9.0 # 🤜 right-facing fist
U+1F91C U+1F3FB ; 9.0 # 🤜🏻 right-facing fist: light skin tone
U+1F91C U+1F3FC ; 9.0 # 🤜🏼 right-facing fist: medium-light skin tone
U+1F91C U+1F3FD ; 9.0 # 🤜🏽 right-facing fist: medium skin tone
U+1F91C U+1F3FE ; 9.0 # 🤜🏾 right-facing fist: medium-dark skin tone
U+1F91C U+1F3FF ; 9.0 # 🤜🏿 right-facing fist: dark skin tone
U+1F44F ; 6.0 # 👏 clapping hands
U+1F44F U+1F3FB ; 8.0 # 👏🏻 clapping hands: light skin tone
U+1F44F U+1F3FC ; 8.0 # 👏🏼 clapping hands: medium-light skin tone
U+1F44F U+1F3FD ; 8.0 # 👏🏽 clapping hands: medium skin tone
U+1F44F U+1F3FE ; 8.0 # 👏🏾 clapping hands: medium-dark skin tone
U+1F44F U+1F3FF ; 8.0 # 👏🏿 clapping hands: dark skin tone
U+1F64C ; 6.0 # 🙌 raising hands
U+1F64C U+1F3FB ; 8.0 # 🙌🏻 raising hands: light skin tone
U+1F64C U+1F3FC ; 8.0 # 🙌🏼 raising hands: medium-light skin tone
U+1F64C U+1F3FD ; 8.0 # 🙌🏽 raising hands: medium skin tone
U+1F64C U+1F3FE ; 8.0 # 🙌🏾 raising hands: medium-dark skin tone
U+1F64C U+1F3FF ; 8.0 # 🙌🏿 raising hands: dark skin tone
U+1F450 ; 6.0 # 👐 open hands
U+1F450 U+1F3FB ; 8.0 # 👐🏻 open hands: light skin tone
U+1F450 U+1F3FC ; 8.0 # 👐🏼 open hands: medium-light skin tone
U+1F450 U+1F3FD ; 8.0 # 👐🏽 open hands: medium skin tone
U+1F450 U+1F3FE ; 8.0 # 👐🏾 open hands: medium-dark skin tone
U+1F450 U+1F3FF ; 8.0 # 👐🏿 open hands: dark skin tone
U+1F932 ; 10.0 # 🤲 palms up together
U+1F932 U+1F3FB ; 10.0 # 🤲🏻 palms up together: light skin tone
U+1F932 U+1F3FC ; 10.0 # 🤲🏼 palms up together: medium-light skin tone
U+1F932 U+1F3FD ; 10.0 # 🤲🏽 palms up together: medium skin tone
U+1F932 U+1F3FE ; 10.0 # 🤲🏾 palms up together: medium-dark skin tone
U+1F932 U+1F3FF ; 10.0 # 🤲🏿 palms up together: dark skin tone
U+1F91D ; 9.0 # 🤝 handshake
U+1F64F ; 6.0 # 🙏 folded hands
U+1F64F U+1F3FB ; 8.0 # 🙏🏻 folded hands: light skin tone
U+1F64F U+1F3FC ; 8.0 # 🙏🏼 folded hands: medium-light skin tone
U+1F64F U+1F3FD ; 8.0 # 🙏🏽 folded hands: medium skin tone
U+1F64F U+1F3FE ; 8.0 # 🙏🏾 folded hands: medium-dark skin tone
U+1F64F U+1F3FF ; 8.0 # 🙏🏿 folded hands: dark skin tone
U+270D ; 1.1 # ✍ writing hand
U+270D U+1F3FB ; 8.0 # ✍🏻 writing hand: light skin tone
U+270D U+1F3FC ; 8.0 # ✍🏼 writing hand: medium-light skin tone
U+270D U+1F3FD ; 8.0 # ✍🏽 writing hand: medium skin tone
U+270D U+1F3FE ; 8.0 # ✍🏾 writing hand: medium-dark skin tone
U+270D U+1F3FF ; 8.0 # ✍🏿 writing hand: dark skin tone
U+1F485 ; 6.0 # 💅 nail polish
U+1F485 U+1F3FB ; 8.0 # 💅🏻 nail polish: light skin tone
U+1F485 U+1F3FC ; 8.0 # 💅🏼 nail polish: medium-light skin tone
U+1F485 U+1F3FD ; 8.0 # 💅🏽 nail polish: medium skin tone
U+1F485 U+1F3FE ; 8.0 # 💅🏾 nail polish: medium-dark skin tone
U+1F485 U+1F3FF ; 8.0 # 💅🏿 nail polish: dark skin tone
U+1F933 ; 9.0 # 🤳 selfie
U+1F933 U+1F3FB ; 9.0 # 🤳🏻 selfie: light skin tone
U+1F933 U+1F3FC ; 9.0 # 🤳🏼 selfie: medium-light skin tone
U+1F933 U+1F3FD ; 9.0 # 🤳🏽 selfie: medium skin tone
U+1F933 U+1F3FE ; 9.0 # 🤳🏾 selfie: medium-dark skin tone
U+1F933 U+1F3FF ; 9.0 # 🤳🏿 selfie: dark skin tone
U+1F4AA ; 6.0 # 💪 flexed biceps
U+1F4AA U+1F3FB ; 8.0 # 💪🏻 flexed biceps: light skin tone
U+1F4AA U+1F3FC ; 8.0 # 💪🏼 flexed biceps: medium-light skin tone
U+1F4AA U+1F3FD ; 8.0 # 💪🏽 flexed biceps: medium skin tone
U+1F4AA U+1F3FE ; 8.0 # 💪🏾 flexed biceps: medium-dark skin tone
U+1F4AA U+1F3FF ; 8.0 # 💪🏿 flexed biceps: dark skin tone
U+1F9BE ; 12.0 # 🦾 mechanical arm
U+1F9BF ; 12.0 # 🦿 mechanical leg
U+1F9B5 ; 11.0 # 🦵 leg
U+1F9B5 U+1F3FB ; 11.0 # 🦵🏻 leg: light skin tone
U+1F9B5 U+1F3FC ; 11.0 # 🦵🏼 leg: medium-light skin tone
U+1F9B5 U+1F3FD ; 11.0 # 🦵🏽 leg: medium skin tone
U+1F9B5 U+1F3FE ; 11.0 # 🦵🏾 leg: medium-dark skin tone
U+1F9B5 U+1F3FF ; 11.0 # 🦵🏿 leg: dark skin tone
U+1F9B6 ; 11.0 # 🦶 foot
U+1F9B6 U+1F3FB ; 11.0 # 🦶🏻 foot: light skin tone
U+1F9B6 U+1F3FC ; 11.0 # 🦶🏼 foot: medium-light skin tone
U+1F9B6 U+1F3FD ; 11.0 # 🦶🏽 foot: medium skin tone
U+1F9B6 U+1F3FE ; 11.0 # 🦶🏾 foot: medium-dark skin tone
U+1F9B6 U+1F3FF ; 11.0 # 🦶🏿 foot: dark skin tone
U+1F442 ; 6.0 # 👂 ear
U+1F442 U+1F3FB ; 8.0 # 👂🏻 ear: light skin tone
U+1F442 U+1F3FC ; 8.0 # 👂🏼 ear: medium-light skin tone
U+1F442 U+1F3FD ; 8.0 # 👂🏽 ear: medium skin tone
U+1F442 U+1F3FE ; 8.0 # 👂🏾 ear: medium-dark skin tone
U+1F442 U+1F3FF ; 8.0 # 👂🏿 ear: dark skin tone
U+1F9BB ; 12.0 # 🦻 ear with hearing aid
U+1F9BB U+1F3FB ; 12.0 # 🦻🏻 ear with hearing aid: light skin tone
U+1F9BB U+1F3FC ; 12.0 # 🦻🏼 ear with hearing aid: medium-light skin tone
U+1F9BB U+1F3FD ; 12.0 # 🦻🏽 ear with hearing aid: medium skin tone
U+1F9BB U+1F3FE ; 12.0 # 🦻🏾 ear with hearing aid: medium-dark skin tone
U+1F9BB U+1F3FF ; 12.0 # 🦻🏿 ear with hearing aid: dark skin tone
U+1F443 ; 6.0 # 👃 nose
U+1F443 U+1F3FB ; 8.0 # 👃🏻 nose: light skin tone
U+1F443 U+1F3FC ; 8.0 # 👃🏼 nose: medium-light skin tone
U+1F443 U+1F3FD ; 8.0 # 👃🏽 nose: medium skin tone
U+1F443 U+1F3FE ; 8.0 # 👃🏾 nose: medium-dark skin tone
U+1F443 U+1F3FF ; 8.0 # 👃🏿 nose: dark skin tone
U+1F9E0 ; 10.0 # 🧠 brain
U+1F9B7 ; 11.0 # 🦷 tooth
U+1F9B4 ; 11.0 # 🦴 bone
U+1F440 ; 6.0 # 👀 eyes
U+1F441 ; 7.0 # 👁 eye
U+1F445 ; 6.0 # 👅 tongue
U+1F444 ; 6.0 # 👄 mouth
U+1F476 ; 6.0 # 👶 baby
U+1F476 U+1F3FB ; 8.0 # 👶🏻 baby: light skin tone
U+1F476 U+1F3FC ; 8.0 # 👶🏼 baby: medium-light skin tone
U+1F476 U+1F3FD ; 8.0 # 👶🏽 baby: medium skin tone
U+1F476 U+1F3FE ; 8.0 # 👶🏾 baby: medium-dark skin tone
U+1F476 U+1F3FF ; 8.0 # 👶🏿 baby: dark skin tone
U+1F9D2 ; 10.0 # 🧒 child
U+1F9D2 U+1F3FB ; 10.0 # 🧒🏻 child: light skin tone
U+1F9D2 U+1F3FC ; 10.0 # 🧒🏼 child: medium-light skin tone
U+1F9D2 U+1F3FD ; 10.0 # 🧒🏽 child: medium skin tone
U+1F9D2 U+1F3FE ; 10.0 # 🧒🏾 child: medium-dark skin tone
U+1F9D2 U+1F3FF ; 10.0 # 🧒🏿 child: dark skin tone
U+1F466 ; 6.0 # 👦 boy
U+1F466 U+1F3FB ; 8.0 # 👦🏻 boy: light skin tone
U+1F466 U+1F3FC ; 8.0 # 👦🏼 boy: medium-light skin tone
U+1F466 U+1F3FD ; 8.0 # 👦🏽 boy: medium skin tone
U+1F466 U+1F3FE ; 8.0 # 👦🏾 boy: medium-dark skin tone
U+1F466 U+1F3FF ; 8.0 # 👦🏿 boy: dark skin tone
U+1F467 ; 6.0 # 👧 girl
U+1F467 U+1F3FB ; 8.0 # 👧🏻 girl: light skin tone
U+1F467 U+1F3FC ; 8.0 # 👧🏼 girl: medium-light skin tone
U+1F467 U+1F3FD ; 8.0 # 👧🏽 girl: medium skin tone
U+1F467 U+1F3FE ; 8.0 # 👧🏾 girl: medium-dark skin tone
U+1F467 U+1F3FF ; 8.0 # 👧🏿 girl: dark skin tone
U+1F9D1 ; 10.0 # 🧑 person
U+1F9D1 U+1F3FB ; 10.0 # 🧑🏻 person: light skin tone
U+1F9D1 U+1F3FC ; 10.0 # 🧑🏼 person: medium-light skin tone
U+1F9D1 U+1F3FD ; 10.0 # 🧑🏽 person: medium skin tone
U+1F9D1 U+1F3FE ; 10.0 # 🧑🏾 person: medium-dark skin tone
U+1F9D1 U+1F3FF ; 10.0 # 🧑🏿 person: dark skin tone
U+1F471 ; 6.0 # 👱 person: blond hair
U+1F471 U+1F3FB ; 8.0 # 👱🏻 person: light skin tone, blond hair
U+1F471 U+1F3FC ; 8.0 # 👱🏼 person: medium-light skin tone, blond hair
U+1F471 U+1F3FD ; 8.0 # 👱🏽 person: medium skin tone, blond hair
U+1F471 U+1F3FE ; 8.0 # 👱🏾 person: medium-dark skin tone, blond hair
U+1F471 U+1F3FF ; 8.0 # 👱🏿 person: dark skin tone, blond hair
U+1F468 ; 6.0 # 👨 man
U+1F468 U+1F3FB ; 8.0 # 👨🏻 man: light skin tone
U+1F468 U+1F3FC ; 8.0 # 👨🏼 man: medium-light skin tone
U+1F468 U+1F3FD ; 8.0 # 👨🏽 man: medium skin tone
U+1F468 U+1F3FE ; 8.0 # 👨🏾 man: medium-dark skin tone
U+1F468 U+1F3FF ; 8.0 # 👨🏿 man: dark skin tone
U+1F9D4 ; 10.0 # 🧔 man: beard
U+1F9D4 U+1F3FB ; 10.0 # 🧔🏻 man: light skin tone, beard
U+1F9D4 U+1F3FC ; 10.0 # 🧔🏼 man: medium-light skin tone, beard
U+1F9D4 U+1F3FD ; 10.0 # 🧔🏽 man: medium skin tone, beard
U+1F9D4 U+1F3FE ; 10.0 # 🧔🏾 man: medium-dark skin tone, beard
U+1F9D4 U+1F3FF ; 10.0 # 🧔🏿 man: dark skin tone, beard
U+1F471 U+200D U+2642 U+FE0F ; 6.0 # 👱‍♂️ man: blond hair
U+1F471 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 👱🏻‍♂️ man: light skin tone, blond hair
U+1F471 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 👱🏼‍♂️ man: medium-light skin tone, blond hair
U+1F471 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 👱🏽‍♂️ man: medium skin tone, blond hair
U+1F471 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 👱🏾‍♂️ man: medium-dark skin tone, blond hair
U+1F471 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 👱🏿‍♂️ man: dark skin tone, blond hair
U+1F468 U+200D U+1F9B0 ; 11.0 # 👨‍🦰 man: red hair
U+1F468 U+1F3FB U+200D U+1F9B0 ; 11.0 # 👨🏻‍🦰 man: light skin tone, red hair
U+1F468 U+1F3FC U+200D U+1F9B0 ; 11.0 # 👨🏼‍🦰 man: medium-light skin tone, red hair
U+1F468 U+1F3FD U+200D U+1F9B0 ; 11.0 # 👨🏽‍🦰 man: medium skin tone, red hair
U+1F468 U+1F3FE U+200D U+1F9B0 ; 11.0 # 👨🏾‍🦰 man: medium-dark skin tone, red hair
U+1F468 U+1F3FF U+200D U+1F9B0 ; 11.0 # 👨🏿‍🦰 man: dark skin tone, red hair
U+1F468 U+200D U+1F9B1 ; 11.0 # 👨‍🦱 man: curly hair
U+1F468 U+1F3FB U+200D U+1F9B1 ; 11.0 # 👨🏻‍🦱 man: light skin tone, curly hair
U+1F468 U+1F3FC U+200D U+1F9B1 ; 11.0 # 👨🏼‍🦱 man: medium-light skin tone, curly hair
U+1F468 U+1F3FD U+200D U+1F9B1 ; 11.0 # 👨🏽‍🦱 man: medium skin tone, curly hair
U+1F468 U+1F3FE U+200D U+1F9B1 ; 11.0 # 👨🏾‍🦱 man: medium-dark skin tone, curly hair
U+1F468 U+1F3FF U+200D U+1F9B1 ; 11.0 # 👨🏿‍🦱 man: dark skin tone, curly hair
U+1F468 U+200D U+1F9B3 ; 11.0 # 👨‍🦳 man: white hair
U+1F468 U+1F3FB U+200D U+1F9B3 ; 11.0 # 👨🏻‍🦳 man: light skin tone, white hair
U+1F468 U+1F3FC U+200D U+1F9B3 ; 11.0 # 👨🏼‍🦳 man: medium-light skin tone, white hair
U+1F468 U+1F3FD U+200D U+1F9B3 ; 11.0 # 👨🏽‍🦳 man: medium skin tone, white hair
U+1F468 U+1F3FE U+200D U+1F9B3 ; 11.0 # 👨🏾‍🦳 man: medium-dark skin tone, white hair
U+1F468 U+1F3FF U+200D U+1F9B3 ; 11.0 # 👨🏿‍🦳 man: dark skin tone, white hair
U+1F468 U+200D U+1F9B2 ; 11.0 # 👨‍🦲 man: bald
U+1F468 U+1F3FB U+200D U+1F9B2 ; 11.0 # 👨🏻‍🦲 man: light skin tone, bald
U+1F468 U+1F3FC U+200D U+1F9B2 ; 11.0 # 👨🏼‍🦲 man: medium-light skin tone, bald
U+1F468 U+1F3FD U+200D U+1F9B2 ; 11.0 # 👨🏽‍🦲 man: medium skin tone, bald
U+1F468 U+1F3FE U+200D U+1F9B2 ; 11.0 # 👨🏾‍🦲 man: medium-dark skin tone, bald
U+1F468 U+1F3FF U+200D U+1F9B2 ; 11.0 # 👨🏿‍🦲 man: dark skin tone, bald
U+1F469 ; 6.0 # 👩 woman
U+1F469 U+1F3FB ; 8.0 # 👩🏻 woman: light skin tone
U+1F469 U+1F3FC ; 8.0 # 👩🏼 woman: medium-light skin tone
U+1F469 U+1F3FD ; 8.0 # 👩🏽 woman: medium skin tone
U+1F469 U+1F3FE ; 8.0 # 👩🏾 woman: medium-dark skin tone
U+1F469 U+1F3FF ; 8.0 # 👩🏿 woman: dark skin tone
U+1F471 U+200D U+2640 U+FE0F ; 6.0 # 👱‍♀️ woman: blond hair
U+1F471 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 👱🏻‍♀️ woman: light skin tone, blond hair
U+1F471 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 👱🏼‍♀️ woman: medium-light skin tone, blond hair
U+1F471 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 👱🏽‍♀️ woman: medium skin tone, blond hair
U+1F471 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 👱🏾‍♀️ woman: medium-dark skin tone, blond hair
U+1F471 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 👱🏿‍♀️ woman: dark skin tone, blond hair
U+1F469 U+200D U+1F9B0 ; 11.0 # 👩‍🦰 woman: red hair
U+1F469 U+1F3FB U+200D U+1F9B0 ; 11.0 # 👩🏻‍🦰 woman: light skin tone, red hair
U+1F469 U+1F3FC U+200D U+1F9B0 ; 11.0 # 👩🏼‍🦰 woman: medium-light skin tone, red hair
U+1F469 U+1F3FD U+200D U+1F9B0 ; 11.0 # 👩🏽‍🦰 woman: medium skin tone, red hair
U+1F469 U+1F3FE U+200D U+1F9B0 ; 11.0 # 👩🏾‍🦰 woman: medium-dark skin tone, red hair
U+1F469 U+1F3FF U+200D U+1F9B0 ; 11.0 # 👩🏿‍🦰 woman: dark skin tone, red hair
U+1F469 U+200D U+1F9B1 ; 11.0 # 👩‍🦱 woman: curly hair
U+1F469 U+1F3FB U+200D U+1F9B1 ; 11.0 # 👩🏻‍🦱 woman: light skin tone, curly hair
U+1F469 U+1F3FC U+200D U+1F9B1 ; 11.0 # 👩🏼‍🦱 woman: medium-light skin tone, curly hair
U+1F469 U+1F3FD U+200D U+1F9B1 ; 11.0 # 👩🏽‍🦱 woman: medium skin tone, curly hair
U+1F469 U+1F3FE U+200D U+1F9B1 ; 11.0 # 👩🏾‍🦱 woman: medium-dark skin tone, curly hair
U+1F469 U+1F3FF U+200D U+1F9B1 ; 11.0 # 👩🏿‍🦱 woman: dark skin tone, curly hair
U+1F469 U+200D U+1F9B3 ; 11.0 # 👩‍🦳 woman: white hair
U+1F469 U+1F3FB U+200D U+1F9B3 ; 11.0 # 👩🏻‍🦳 woman: light skin tone, white hair
U+1F469 U+1F3FC U+200D U+1F9B3 ; 11.0 # 👩🏼‍🦳 woman: medium-light skin tone, white hair
U+1F469 U+1F3FD U+200D U+1F9B3 ; 11.0 # 👩🏽‍🦳 woman: medium skin tone, white hair
U+1F469 U+1F3FE U+200D U+1F9B3 ; 11.0 # 👩🏾‍🦳 woman: medium-dark skin tone, white hair
U+1F469 U+1F3FF U+200D U+1F9B3 ; 11.0 # 👩🏿‍🦳 woman: dark skin tone, white hair
U+1F469 U+200D U+1F9B2 ; 11.0 # 👩‍🦲 woman: bald
U+1F469 U+1F3FB U+200D U+1F9B2 ; 11.0 # 👩🏻‍🦲 woman: light skin tone, bald
U+1F469 U+1F3FC U+200D U+1F9B2 ; 11.0 # 👩🏼‍🦲 woman: medium-light skin tone, bald
U+1F469 U+1F3FD U+200D U+1F9B2 ; 11.0 # 👩🏽‍🦲 woman: medium skin tone, bald
U+1F469 U+1F3FE U+200D U+1F9B2 ; 11.0 # 👩🏾‍🦲 woman: medium-dark skin tone, bald
U+1F469 U+1F3FF U+200D U+1F9B2 ; 11.0 # 👩🏿‍🦲 woman: dark skin tone, bald
U+1F9D3 ; 10.0 # 🧓 older person
U+1F9D3 U+1F3FB ; 10.0 # 🧓🏻 older person: light skin tone
U+1F9D3 U+1F3FC ; 10.0 # 🧓🏼 older person: medium-light skin tone
U+1F9D3 U+1F3FD ; 10.0 # 🧓🏽 older person: medium skin tone
U+1F9D3 U+1F3FE ; 10.0 # 🧓🏾 older person: medium-dark skin tone
U+1F9D3 U+1F3FF ; 10.0 # 🧓🏿 older person: dark skin tone
U+1F474 ; 6.0 # 👴 old man
U+1F474 U+1F3FB ; 8.0 # 👴🏻 old man: light skin tone
U+1F474 U+1F3FC ; 8.0 # 👴🏼 old man: medium-light skin tone
U+1F474 U+1F3FD ; 8.0 # 👴🏽 old man: medium skin tone
U+1F474 U+1F3FE ; 8.0 # 👴🏾 old man: medium-dark skin tone
U+1F474 U+1F3FF ; 8.0 # 👴🏿 old man: dark skin tone
U+1F475 ; 6.0 # 👵 old woman
U+1F475 U+1F3FB ; 8.0 # 👵🏻 old woman: light skin tone
U+1F475 U+1F3FC ; 8.0 # 👵🏼 old woman: medium-light skin tone
U+1F475 U+1F3FD ; 8.0 # 👵🏽 old woman: medium skin tone
U+1F475 U+1F3FE ; 8.0 # 👵🏾 old woman: medium-dark skin tone
U+1F475 U+1F3FF ; 8.0 # 👵🏿 old woman: dark skin tone
U+1F64D ; 6.0 # 🙍 person frowning
U+1F64D U+1F3FB ; 8.0 # 🙍🏻 person frowning: light skin tone
U+1F64D U+1F3FC ; 8.0 # 🙍🏼 person frowning: medium-light skin tone
U+1F64D U+1F3FD ; 8.0 # 🙍🏽 person frowning: medium skin tone
U+1F64D U+1F3FE ; 8.0 # 🙍🏾 person frowning: medium-dark skin tone
U+1F64D U+1F3FF ; 8.0 # 🙍🏿 person frowning: dark skin tone
U+1F64D U+200D U+2642 U+FE0F ; 6.0 # 🙍‍♂️ man frowning
U+1F64D U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🙍🏻‍♂️ man frowning: light skin tone
U+1F64D U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🙍🏼‍♂️ man frowning: medium-light skin tone
U+1F64D U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🙍🏽‍♂️ man frowning: medium skin tone
U+1F64D U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🙍🏾‍♂️ man frowning: medium-dark skin tone
U+1F64D U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🙍🏿‍♂️ man frowning: dark skin tone
U+1F64D U+200D U+2640 U+FE0F ; 6.0 # 🙍‍♀️ woman frowning
U+1F64D U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🙍🏻‍♀️ woman frowning: light skin tone
U+1F64D U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🙍🏼‍♀️ woman frowning: medium-light skin tone
U+1F64D U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🙍🏽‍♀️ woman frowning: medium skin tone
U+1F64D U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🙍🏾‍♀️ woman frowning: medium-dark skin tone
U+1F64D U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🙍🏿‍♀️ woman frowning: dark skin tone
U+1F64E ; 6.0 # 🙎 person pouting
U+1F64E U+1F3FB ; 8.0 # 🙎🏻 person pouting: light skin tone
U+1F64E U+1F3FC ; 8.0 # 🙎🏼 person pouting: medium-light skin tone
U+1F64E U+1F3FD ; 8.0 # 🙎🏽 person pouting: medium skin tone
U+1F64E U+1F3FE ; 8.0 # 🙎🏾 person pouting: medium-dark skin tone
U+1F64E U+1F3FF ; 8.0 # 🙎🏿 person pouting: dark skin tone
U+1F64E U+200D U+2642 U+FE0F ; 6.0 # 🙎‍♂️ man pouting
U+1F64E U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🙎🏻‍♂️ man pouting: light skin tone
U+1F64E U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🙎🏼‍♂️ man pouting: medium-light skin tone
U+1F64E U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🙎🏽‍♂️ man pouting: medium skin tone
U+1F64E U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🙎🏾‍♂️ man pouting: medium-dark skin tone
U+1F64E U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🙎🏿‍♂️ man pouting: dark skin tone
U+1F64E U+200D U+2640 U+FE0F ; 6.0 # 🙎‍♀️ woman pouting
U+1F64E U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🙎🏻‍♀️ woman pouting: light skin tone
U+1F64E U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🙎🏼‍♀️ woman pouting: medium-light skin tone
U+1F64E U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🙎🏽‍♀️ woman pouting: medium skin tone
U+1F64E U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🙎🏾‍♀️ woman pouting: medium-dark skin tone
U+1F64E U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🙎🏿‍♀️ woman pouting: dark skin tone
U+1F645 ; 6.0 # 🙅 person gesturing NO
U+1F645 U+1F3FB ; 8.0 # 🙅🏻 person gesturing NO: light skin tone
U+1F645 U+1F3FC ; 8.0 # 🙅🏼 person gesturing NO: medium-light skin tone
U+1F645 U+1F3FD ; 8.0 # 🙅🏽 person gesturing NO: medium skin tone
U+1F645 U+1F3FE ; 8.0 # 🙅🏾 person gesturing NO: medium-dark skin tone
U+1F645 U+1F3FF ; 8.0 # 🙅🏿 person gesturing NO: dark skin tone
U+1F645 U+200D U+2642 U+FE0F ; 6.0 # 🙅‍♂️ man gesturing NO
U+1F645 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🙅🏻‍♂️ man gesturing NO: light skin tone
U+1F645 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🙅🏼‍♂️ man gesturing NO: medium-light skin tone
U+1F645 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🙅🏽‍♂️ man gesturing NO: medium skin tone
U+1F645 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🙅🏾‍♂️ man gesturing NO: medium-dark skin tone
U+1F645 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🙅🏿‍♂️ man gesturing NO: dark skin tone
U+1F645 U+200D U+2640 U+FE0F ; 6.0 # 🙅‍♀️ woman gesturing NO
U+1F645 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🙅🏻‍♀️ woman gesturing NO: light skin tone
U+1F645 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🙅🏼‍♀️ woman gesturing NO: medium-light skin tone
U+1F645 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🙅🏽‍♀️ woman gesturing NO: medium skin tone
U+1F645 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🙅🏾‍♀️ woman gesturing NO: medium-dark skin tone
U+1F645 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🙅🏿‍♀️ woman gesturing NO: dark skin tone
U+1F646 ; 6.0 # 🙆 person gesturing OK
U+1F646 U+1F3FB ; 8.0 # 🙆🏻 person gesturing OK: light skin tone
U+1F646 U+1F3FC ; 8.0 # 🙆🏼 person gesturing OK: medium-light skin tone
U+1F646 U+1F3FD ; 8.0 # 🙆🏽 person gesturing OK: medium skin tone
U+1F646 U+1F3FE ; 8.0 # 🙆🏾 person gesturing OK: medium-dark skin tone
U+1F646 U+1F3FF ; 8.0 # 🙆🏿 person gesturing OK: dark skin tone
U+1F646 U+200D U+2642 U+FE0F ; 6.0 # 🙆‍♂️ man gesturing OK
U+1F646 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🙆🏻‍♂️ man gesturing OK: light skin tone
U+1F646 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🙆🏼‍♂️ man gesturing OK: medium-light skin tone
U+1F646 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🙆🏽‍♂️ man gesturing OK: medium skin tone
U+1F646 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🙆🏾‍♂️ man gesturing OK: medium-dark skin tone
U+1F646 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🙆🏿‍♂️ man gesturing OK: dark skin tone
U+1F646 U+200D U+2640 U+FE0F ; 6.0 # 🙆‍♀️ woman gesturing OK
U+1F646 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🙆🏻‍♀️ woman gesturing OK: light skin tone
U+1F646 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🙆🏼‍♀️ woman gesturing OK: medium-light skin tone
U+1F646 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🙆🏽‍♀️ woman gesturing OK: medium skin tone
U+1F646 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🙆🏾‍♀️ woman gesturing OK: medium-dark skin tone
U+1F646 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🙆🏿‍♀️ woman gesturing OK: dark skin tone
U+1F481 ; 6.0 # 💁 person tipping hand
U+1F481 U+1F3FB ; 8.0 # 💁🏻 person tipping hand: light skin tone
U+1F481 U+1F3FC ; 8.0 # 💁🏼 person tipping hand: medium-light skin tone
U+1F481 U+1F3FD ; 8.0 # 💁🏽 person tipping hand: medium skin tone
U+1F481 U+1F3FE ; 8.0 # 💁🏾 person tipping hand: medium-dark skin tone
U+1F481 U+1F3FF ; 8.0 # 💁🏿 person tipping hand: dark skin tone
U+1F481 U+200D U+2642 U+FE0F ; 6.0 # 💁‍♂️ man tipping hand
U+1F481 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 💁🏻‍♂️ man tipping hand: light skin tone
U+1F481 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 💁🏼‍♂️ man tipping hand: medium-light skin tone
U+1F481 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 💁🏽‍♂️ man tipping hand: medium skin tone
U+1F481 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 💁🏾‍♂️ man tipping hand: medium-dark skin tone
U+1F481 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 💁🏿‍♂️ man tipping hand: dark skin tone
U+1F481 U+200D U+2640 U+FE0F ; 6.0 # 💁‍♀️ woman tipping hand
U+1F481 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 💁🏻‍♀️ woman tipping hand: light skin tone
U+1F481 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 💁🏼‍♀️ woman tipping hand: medium-light skin tone
U+1F481 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 💁🏽‍♀️ woman tipping hand: medium skin tone
U+1F481 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 💁🏾‍♀️ woman tipping hand: medium-dark skin tone
U+1F481 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 💁🏿‍♀️ woman tipping hand: dark skin tone
U+1F64B ; 6.0 # 🙋 person raising hand
U+1F64B U+1F3FB ; 8.0 # 🙋🏻 person raising hand: light skin tone
U+1F64B U+1F3FC ; 8.0 # 🙋🏼 person raising hand: medium-light skin tone
U+1F64B U+1F3FD ; 8.0 # 🙋🏽 person raising hand: medium skin tone
U+1F64B U+1F3FE ; 8.0 # 🙋🏾 person raising hand: medium-dark skin tone
U+1F64B U+1F3FF ; 8.0 # 🙋🏿 person raising hand: dark skin tone
U+1F64B U+200D U+2642 U+FE0F ; 6.0 # 🙋‍♂️ man raising hand
U+1F64B U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🙋🏻‍♂️ man raising hand: light skin tone
U+1F64B U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🙋🏼‍♂️ man raising hand: medium-light skin tone
U+1F64B U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🙋🏽‍♂️ man raising hand: medium skin tone
U+1F64B U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🙋🏾‍♂️ man raising hand: medium-dark skin tone
U+1F64B U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🙋🏿‍♂️ man raising hand: dark skin tone
U+1F64B U+200D U+2640 U+FE0F ; 6.0 # 🙋‍♀️ woman raising hand
U+1F64B U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🙋🏻‍♀️ woman raising hand: light skin tone
U+1F64B U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🙋🏼‍♀️ woman raising hand: medium-light skin tone
U+1F64B U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🙋🏽‍♀️ woman raising hand: medium skin tone
U+1F64B U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🙋🏾‍♀️ woman raising hand: medium-dark skin tone
U+1F64B U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🙋🏿‍♀️ woman raising hand: dark skin tone
U+1F9CF ; 12.0 # 🧏 deaf person
U+1F9CF U+1F3FB ; 12.0 # 🧏🏻 deaf person: light skin tone
U+1F9CF U+1F3FC ; 12.0 # 🧏🏼 deaf person: medium-light skin tone
U+1F9CF U+1F3FD ; 12.0 # 🧏🏽 deaf person: medium skin tone
U+1F9CF U+1F3FE ; 12.0 # 🧏🏾 deaf person: medium-dark skin tone
U+1F9CF U+1F3FF ; 12.0 # 🧏🏿 deaf person: dark skin tone
U+1F9CF U+200D U+2642 U+FE0F ; 12.0 # 🧏‍♂️ deaf man
U+1F9CF U+1F3FB U+200D U+2642 U+FE0F ; 12.0 # 🧏🏻‍♂️ deaf man: light skin tone
U+1F9CF U+1F3FC U+200D U+2642 U+FE0F ; 12.0 # 🧏🏼‍♂️ deaf man: medium-light skin tone
U+1F9CF U+1F3FD U+200D U+2642 U+FE0F ; 12.0 # 🧏🏽‍♂️ deaf man: medium skin tone
U+1F9CF U+1F3FE U+200D U+2642 U+FE0F ; 12.0 # 🧏🏾‍♂️ deaf man: medium-dark skin tone
U+1F9CF U+1F3FF U+200D U+2642 U+FE0F ; 12.0 # 🧏🏿‍♂️ deaf man: dark skin tone
U+1F9CF U+200D U+2640 U+FE0F ; 12.0 # 🧏‍♀️ deaf woman
U+1F9CF U+1F3FB U+200D U+2640 U+FE0F ; 12.0 # 🧏🏻‍♀️ deaf woman: light skin tone
U+1F9CF U+1F3FC U+200D U+2640 U+FE0F ; 12.0 # 🧏🏼‍♀️ deaf woman: medium-light skin tone
U+1F9CF U+1F3FD U+200D U+2640 U+FE0F ; 12.0 # 🧏🏽‍♀️ deaf woman: medium skin tone
U+1F9CF U+1F3FE U+200D U+2640 U+FE0F ; 12.0 # 🧏🏾‍♀️ deaf woman: medium-dark skin tone
U+1F9CF U+1F3FF U+200D U+2640 U+FE0F ; 12.0 # 🧏🏿‍♀️ deaf woman: dark skin tone
U+1F647 ; 6.0 # 🙇 person bowing
U+1F647 U+1F3FB ; 8.0 # 🙇🏻 person bowing: light skin tone
U+1F647 U+1F3FC ; 8.0 # 🙇🏼 person bowing: medium-light skin tone
U+1F647 U+1F3FD ; 8.0 # 🙇🏽 person bowing: medium skin tone
U+1F647 U+1F3FE ; 8.0 # 🙇🏾 person bowing: medium-dark skin tone
U+1F647 U+1F3FF ; 8.0 # 🙇🏿 person bowing: dark skin tone
U+1F647 U+200D U+2642 U+FE0F ; 6.0 # 🙇‍♂️ man bowing
U+1F647 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🙇🏻‍♂️ man bowing: light skin tone
U+1F647 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🙇🏼‍♂️ man bowing: medium-light skin tone
U+1F647 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🙇🏽‍♂️ man bowing: medium skin tone
U+1F647 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🙇🏾‍♂️ man bowing: medium-dark skin tone
U+1F647 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🙇🏿‍♂️ man bowing: dark skin tone
U+1F647 U+200D U+2640 U+FE0F ; 6.0 # 🙇‍♀️ woman bowing
U+1F647 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🙇🏻‍♀️ woman bowing: light skin tone
U+1F647 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🙇🏼‍♀️ woman bowing: medium-light skin tone
U+1F647 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🙇🏽‍♀️ woman bowing: medium skin tone
U+1F647 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🙇🏾‍♀️ woman bowing: medium-dark skin tone
U+1F647 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🙇🏿‍♀️ woman bowing: dark skin tone
U+1F926 ; 9.0 # 🤦 person facepalming
U+1F926 U+1F3FB ; 9.0 # 🤦🏻 person facepalming: light skin tone
U+1F926 U+1F3FC ; 9.0 # 🤦🏼 person facepalming: medium-light skin tone
U+1F926 U+1F3FD ; 9.0 # 🤦🏽 person facepalming: medium skin tone
U+1F926 U+1F3FE ; 9.0 # 🤦🏾 person facepalming: medium-dark skin tone
U+1F926 U+1F3FF ; 9.0 # 🤦🏿 person facepalming: dark skin tone
U+1F926 U+200D U+2642 U+FE0F ; 9.0 # 🤦‍♂️ man facepalming
U+1F926 U+1F3FB U+200D U+2642 U+FE0F ; 9.0 # 🤦🏻‍♂️ man facepalming: light skin tone
U+1F926 U+1F3FC U+200D U+2642 U+FE0F ; 9.0 # 🤦🏼‍♂️ man facepalming: medium-light skin tone
U+1F926 U+1F3FD U+200D U+2642 U+FE0F ; 9.0 # 🤦🏽‍♂️ man facepalming: medium skin tone
U+1F926 U+1F3FE U+200D U+2642 U+FE0F ; 9.0 # 🤦🏾‍♂️ man facepalming: medium-dark skin tone
U+1F926 U+1F3FF U+200D U+2642 U+FE0F ; 9.0 # 🤦🏿‍♂️ man facepalming: dark skin tone
U+1F926 U+200D U+2640 U+FE0F ; 9.0 # 🤦‍♀️ woman facepalming
U+1F926 U+1F3FB U+200D U+2640 U+FE0F ; 9.0 # 🤦🏻‍♀️ woman facepalming: light skin tone
U+1F926 U+1F3FC U+200D U+2640 U+FE0F ; 9.0 # 🤦🏼‍♀️ woman facepalming: medium-light skin tone
U+1F926 U+1F3FD U+200D U+2640 U+FE0F ; 9.0 # 🤦🏽‍♀️ woman facepalming: medium skin tone
U+1F926 U+1F3FE U+200D U+2640 U+FE0F ; 9.0 # 🤦🏾‍♀️ woman facepalming: medium-dark skin tone
U+1F926 U+1F3FF U+200D U+2640 U+FE0F ; 9.0 # 🤦🏿‍♀️ woman facepalming: dark skin tone
U+1F937 ; 9.0 # 🤷 person shrugging
U+1F937 U+1F3FB ; 9.0 # 🤷🏻 person shrugging: light skin tone
U+1F937 U+1F3FC ; 9.0 # 🤷🏼 person shrugging: medium-light skin tone
U+1F937 U+1F3FD ; 9.0 # 🤷🏽 person shrugging: medium skin tone
U+1F937 U+1F3FE ; 9.0 # 🤷🏾 person shrugging: medium-dark skin tone
U+1F937 U+1F3FF ; 9.0 # 🤷🏿 person shrugging: dark skin tone
U+1F937 U+200D U+2642 U+FE0F ; 9.0 # 🤷‍♂️ man shrugging
U+1F937 U+1F3FB U+200D U+2642 U+FE0F ; 9.0 # 🤷🏻‍♂️ man shrugging: light skin tone
U+1F937 U+1F3FC U+200D U+2642 U+FE0F ; 9.0 # 🤷🏼‍♂️ man shrugging: medium-light skin tone
U+1F937 U+1F3FD U+200D U+2642 U+FE0F ; 9.0 # 🤷🏽‍♂️ man shrugging: medium skin tone
U+1F937 U+1F3FE U+200D U+2642 U+FE0F ; 9.0 # 🤷🏾‍♂️ man shrugging: medium-dark skin tone
U+1F937 U+1F3FF U+200D U+2642 U+FE0F ; 9.0 # 🤷🏿‍♂️ man shrugging: dark skin tone
U+1F937 U+200D U+2640 U+FE0F ; 9.0 # 🤷‍♀️ woman shrugging
U+1F937 U+1F3FB U+200D U+2640 U+FE0F ; 9.0 # 🤷🏻‍♀️ woman shrugging: light skin tone
U+1F937 U+1F3FC U+200D U+2640 U+FE0F ; 9.0 # 🤷🏼‍♀️ woman shrugging: medium-light skin tone
U+1F937 U+1F3FD U+200D U+2640 U+FE0F ; 9.0 # 🤷🏽‍♀️ woman shrugging: medium skin tone
U+1F937 U+1F3FE U+200D U+2640 U+FE0F ; 9.0 # 🤷🏾‍♀️ woman shrugging: medium-dark skin tone
U+1F937 U+1F3FF U+200D U+2640 U+FE0F ; 9.0 # 🤷🏿‍♀️ woman shrugging: dark skin tone
U+1F468 U+200D U+2695 U+FE0F ; 6.0 # 👨‍⚕️ man health worker
U+1F468 U+1F3FB U+200D U+2695 U+FE0F ; 8.0 # 👨🏻‍⚕️ man health worker: light skin tone
U+1F468 U+1F3FC U+200D U+2695 U+FE0F ; 8.0 # 👨🏼‍⚕️ man health worker: medium-light skin tone
U+1F468 U+1F3FD U+200D U+2695 U+FE0F ; 8.0 # 👨🏽‍⚕️ man health worker: medium skin tone
U+1F468 U+1F3FE U+200D U+2695 U+FE0F ; 8.0 # 👨🏾‍⚕️ man health worker: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+2695 U+FE0F ; 8.0 # 👨🏿‍⚕️ man health worker: dark skin tone
U+1F469 U+200D U+2695 U+FE0F ; 6.0 # 👩‍⚕️ woman health worker
U+1F469 U+1F3FB U+200D U+2695 U+FE0F ; 8.0 # 👩🏻‍⚕️ woman health worker: light skin tone
U+1F469 U+1F3FC U+200D U+2695 U+FE0F ; 8.0 # 👩🏼‍⚕️ woman health worker: medium-light skin tone
U+1F469 U+1F3FD U+200D U+2695 U+FE0F ; 8.0 # 👩🏽‍⚕️ woman health worker: medium skin tone
U+1F469 U+1F3FE U+200D U+2695 U+FE0F ; 8.0 # 👩🏾‍⚕️ woman health worker: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+2695 U+FE0F ; 8.0 # 👩🏿‍⚕️ woman health worker: dark skin tone
U+1F468 U+200D U+1F393 ; 6.0 # 👨‍🎓 man student
U+1F468 U+1F3FB U+200D U+1F393 ; 8.0 # 👨🏻‍🎓 man student: light skin tone
U+1F468 U+1F3FC U+200D U+1F393 ; 8.0 # 👨🏼‍🎓 man student: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F393 ; 8.0 # 👨🏽‍🎓 man student: medium skin tone
U+1F468 U+1F3FE U+200D U+1F393 ; 8.0 # 👨🏾‍🎓 man student: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F393 ; 8.0 # 👨🏿‍🎓 man student: dark skin tone
U+1F469 U+200D U+1F393 ; 6.0 # 👩‍🎓 woman student
U+1F469 U+1F3FB U+200D U+1F393 ; 8.0 # 👩🏻‍🎓 woman student: light skin tone
U+1F469 U+1F3FC U+200D U+1F393 ; 8.0 # 👩🏼‍🎓 woman student: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F393 ; 8.0 # 👩🏽‍🎓 woman student: medium skin tone
U+1F469 U+1F3FE U+200D U+1F393 ; 8.0 # 👩🏾‍🎓 woman student: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F393 ; 8.0 # 👩🏿‍🎓 woman student: dark skin tone
U+1F468 U+200D U+1F3EB ; 6.0 # 👨‍🏫 man teacher
U+1F468 U+1F3FB U+200D U+1F3EB ; 8.0 # 👨🏻‍🏫 man teacher: light skin tone
U+1F468 U+1F3FC U+200D U+1F3EB ; 8.0 # 👨🏼‍🏫 man teacher: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F3EB ; 8.0 # 👨🏽‍🏫 man teacher: medium skin tone
U+1F468 U+1F3FE U+200D U+1F3EB ; 8.0 # 👨🏾‍🏫 man teacher: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F3EB ; 8.0 # 👨🏿‍🏫 man teacher: dark skin tone
U+1F469 U+200D U+1F3EB ; 6.0 # 👩‍🏫 woman teacher
U+1F469 U+1F3FB U+200D U+1F3EB ; 8.0 # 👩🏻‍🏫 woman teacher: light skin tone
U+1F469 U+1F3FC U+200D U+1F3EB ; 8.0 # 👩🏼‍🏫 woman teacher: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F3EB ; 8.0 # 👩🏽‍🏫 woman teacher: medium skin tone
U+1F469 U+1F3FE U+200D U+1F3EB ; 8.0 # 👩🏾‍🏫 woman teacher: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F3EB ; 8.0 # 👩🏿‍🏫 woman teacher: dark skin tone
U+1F468 U+200D U+2696 U+FE0F ; 6.0 # 👨‍⚖️ man judge
U+1F468 U+1F3FB U+200D U+2696 U+FE0F ; 8.0 # 👨🏻‍⚖️ man judge: light skin tone
U+1F468 U+1F3FC U+200D U+2696 U+FE0F ; 8.0 # 👨🏼‍⚖️ man judge: medium-light skin tone
U+1F468 U+1F3FD U+200D U+2696 U+FE0F ; 8.0 # 👨🏽‍⚖️ man judge: medium skin tone
U+1F468 U+1F3FE U+200D U+2696 U+FE0F ; 8.0 # 👨🏾‍⚖️ man judge: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+2696 U+FE0F ; 8.0 # 👨🏿‍⚖️ man judge: dark skin tone
U+1F469 U+200D U+2696 U+FE0F ; 6.0 # 👩‍⚖️ woman judge
U+1F469 U+1F3FB U+200D U+2696 U+FE0F ; 8.0 # 👩🏻‍⚖️ woman judge: light skin tone
U+1F469 U+1F3FC U+200D U+2696 U+FE0F ; 8.0 # 👩🏼‍⚖️ woman judge: medium-light skin tone
U+1F469 U+1F3FD U+200D U+2696 U+FE0F ; 8.0 # 👩🏽‍⚖️ woman judge: medium skin tone
U+1F469 U+1F3FE U+200D U+2696 U+FE0F ; 8.0 # 👩🏾‍⚖️ woman judge: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+2696 U+FE0F ; 8.0 # 👩🏿‍⚖️ woman judge: dark skin tone
U+1F468 U+200D U+1F33E ; 6.0 # 👨‍🌾 man farmer
U+1F468 U+1F3FB U+200D U+1F33E ; 8.0 # 👨🏻‍🌾 man farmer: light skin tone
U+1F468 U+1F3FC U+200D U+1F33E ; 8.0 # 👨🏼‍🌾 man farmer: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F33E ; 8.0 # 👨🏽‍🌾 man farmer: medium skin tone
U+1F468 U+1F3FE U+200D U+1F33E ; 8.0 # 👨🏾‍🌾 man farmer: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F33E ; 8.0 # 👨🏿‍🌾 man farmer: dark skin tone
U+1F469 U+200D U+1F33E ; 6.0 # 👩‍🌾 woman farmer
U+1F469 U+1F3FB U+200D U+1F33E ; 8.0 # 👩🏻‍🌾 woman farmer: light skin tone
U+1F469 U+1F3FC U+200D U+1F33E ; 8.0 # 👩🏼‍🌾 woman farmer: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F33E ; 8.0 # 👩🏽‍🌾 woman farmer: medium skin tone
U+1F469 U+1F3FE U+200D U+1F33E ; 8.0 # 👩🏾‍🌾 woman farmer: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F33E ; 8.0 # 👩🏿‍🌾 woman farmer: dark skin tone
U+1F468 U+200D U+1F373 ; 6.0 # 👨‍🍳 man cook
U+1F468 U+1F3FB U+200D U+1F373 ; 8.0 # 👨🏻‍🍳 man cook: light skin tone
U+1F468 U+1F3FC U+200D U+1F373 ; 8.0 # 👨🏼‍🍳 man cook: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F373 ; 8.0 # 👨🏽‍🍳 man cook: medium skin tone
U+1F468 U+1F3FE U+200D U+1F373 ; 8.0 # 👨🏾‍🍳 man cook: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F373 ; 8.0 # 👨🏿‍🍳 man cook: dark skin tone
U+1F469 U+200D U+1F373 ; 6.0 # 👩‍🍳 woman cook
U+1F469 U+1F3FB U+200D U+1F373 ; 8.0 # 👩🏻‍🍳 woman cook: light skin tone
U+1F469 U+1F3FC U+200D U+1F373 ; 8.0 # 👩🏼‍🍳 woman cook: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F373 ; 8.0 # 👩🏽‍🍳 woman cook: medium skin tone
U+1F469 U+1F3FE U+200D U+1F373 ; 8.0 # 👩🏾‍🍳 woman cook: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F373 ; 8.0 # 👩🏿‍🍳 woman cook: dark skin tone
U+1F468 U+200D U+1F527 ; 6.0 # 👨‍🔧 man mechanic
U+1F468 U+1F3FB U+200D U+1F527 ; 8.0 # 👨🏻‍🔧 man mechanic: light skin tone
U+1F468 U+1F3FC U+200D U+1F527 ; 8.0 # 👨🏼‍🔧 man mechanic: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F527 ; 8.0 # 👨🏽‍🔧 man mechanic: medium skin tone
U+1F468 U+1F3FE U+200D U+1F527 ; 8.0 # 👨🏾‍🔧 man mechanic: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F527 ; 8.0 # 👨🏿‍🔧 man mechanic: dark skin tone
U+1F469 U+200D U+1F527 ; 6.0 # 👩‍🔧 woman mechanic
U+1F469 U+1F3FB U+200D U+1F527 ; 8.0 # 👩🏻‍🔧 woman mechanic: light skin tone
U+1F469 U+1F3FC U+200D U+1F527 ; 8.0 # 👩🏼‍🔧 woman mechanic: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F527 ; 8.0 # 👩🏽‍🔧 woman mechanic: medium skin tone
U+1F469 U+1F3FE U+200D U+1F527 ; 8.0 # 👩🏾‍🔧 woman mechanic: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F527 ; 8.0 # 👩🏿‍🔧 woman mechanic: dark skin tone
U+1F468 U+200D U+1F3ED ; 6.0 # 👨‍🏭 man factory worker
U+1F468 U+1F3FB U+200D U+1F3ED ; 8.0 # 👨🏻‍🏭 man factory worker: light skin tone
U+1F468 U+1F3FC U+200D U+1F3ED ; 8.0 # 👨🏼‍🏭 man factory worker: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F3ED ; 8.0 # 👨🏽‍🏭 man factory worker: medium skin tone
U+1F468 U+1F3FE U+200D U+1F3ED ; 8.0 # 👨🏾‍🏭 man factory worker: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F3ED ; 8.0 # 👨🏿‍🏭 man factory worker: dark skin tone
U+1F469 U+200D U+1F3ED ; 6.0 # 👩‍🏭 woman factory worker
U+1F469 U+1F3FB U+200D U+1F3ED ; 8.0 # 👩🏻‍🏭 woman factory worker: light skin tone
U+1F469 U+1F3FC U+200D U+1F3ED ; 8.0 # 👩🏼‍🏭 woman factory worker: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F3ED ; 8.0 # 👩🏽‍🏭 woman factory worker: medium skin tone
U+1F469 U+1F3FE U+200D U+1F3ED ; 8.0 # 👩🏾‍🏭 woman factory worker: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F3ED ; 8.0 # 👩🏿‍🏭 woman factory worker: dark skin tone
U+1F468 U+200D U+1F4BC ; 6.0 # 👨‍💼 man office worker
U+1F468 U+1F3FB U+200D U+1F4BC ; 8.0 # 👨🏻‍💼 man office worker: light skin tone
U+1F468 U+1F3FC U+200D U+1F4BC ; 8.0 # 👨🏼‍💼 man office worker: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F4BC ; 8.0 # 👨🏽‍💼 man office worker: medium skin tone
U+1F468 U+1F3FE U+200D U+1F4BC ; 8.0 # 👨🏾‍💼 man office worker: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F4BC ; 8.0 # 👨🏿‍💼 man office worker: dark skin tone
U+1F469 U+200D U+1F4BC ; 6.0 # 👩‍💼 woman office worker
U+1F469 U+1F3FB U+200D U+1F4BC ; 8.0 # 👩🏻‍💼 woman office worker: light skin tone
U+1F469 U+1F3FC U+200D U+1F4BC ; 8.0 # 👩🏼‍💼 woman office worker: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F4BC ; 8.0 # 👩🏽‍💼 woman office worker: medium skin tone
U+1F469 U+1F3FE U+200D U+1F4BC ; 8.0 # 👩🏾‍💼 woman office worker: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F4BC ; 8.0 # 👩🏿‍💼 woman office worker: dark skin tone
U+1F468 U+200D U+1F52C ; 6.0 # 👨‍🔬 man scientist
U+1F468 U+1F3FB U+200D U+1F52C ; 8.0 # 👨🏻‍🔬 man scientist: light skin tone
U+1F468 U+1F3FC U+200D U+1F52C ; 8.0 # 👨🏼‍🔬 man scientist: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F52C ; 8.0 # 👨🏽‍🔬 man scientist: medium skin tone
U+1F468 U+1F3FE U+200D U+1F52C ; 8.0 # 👨🏾‍🔬 man scientist: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F52C ; 8.0 # 👨🏿‍🔬 man scientist: dark skin tone
U+1F469 U+200D U+1F52C ; 6.0 # 👩‍🔬 woman scientist
U+1F469 U+1F3FB U+200D U+1F52C ; 8.0 # 👩🏻‍🔬 woman scientist: light skin tone
U+1F469 U+1F3FC U+200D U+1F52C ; 8.0 # 👩🏼‍🔬 woman scientist: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F52C ; 8.0 # 👩🏽‍🔬 woman scientist: medium skin tone
U+1F469 U+1F3FE U+200D U+1F52C ; 8.0 # 👩🏾‍🔬 woman scientist: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F52C ; 8.0 # 👩🏿‍🔬 woman scientist: dark skin tone
U+1F468 U+200D U+1F4BB ; 6.0 # 👨‍💻 man technologist
U+1F468 U+1F3FB U+200D U+1F4BB ; 8.0 # 👨🏻‍💻 man technologist: light skin tone
U+1F468 U+1F3FC U+200D U+1F4BB ; 8.0 # 👨🏼‍💻 man technologist: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F4BB ; 8.0 # 👨🏽‍💻 man technologist: medium skin tone
U+1F468 U+1F3FE U+200D U+1F4BB ; 8.0 # 👨🏾‍💻 man technologist: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F4BB ; 8.0 # 👨🏿‍💻 man technologist: dark skin tone
U+1F469 U+200D U+1F4BB ; 6.0 # 👩‍💻 woman technologist
U+1F469 U+1F3FB U+200D U+1F4BB ; 8.0 # 👩🏻‍💻 woman technologist: light skin tone
U+1F469 U+1F3FC U+200D U+1F4BB ; 8.0 # 👩🏼‍💻 woman technologist: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F4BB ; 8.0 # 👩🏽‍💻 woman technologist: medium skin tone
U+1F469 U+1F3FE U+200D U+1F4BB ; 8.0 # 👩🏾‍💻 woman technologist: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F4BB ; 8.0 # 👩🏿‍💻 woman technologist: dark skin tone
U+1F468 U+200D U+1F3A4 ; 6.0 # 👨‍🎤 man singer
U+1F468 U+1F3FB U+200D U+1F3A4 ; 8.0 # 👨🏻‍🎤 man singer: light skin tone
U+1F468 U+1F3FC U+200D U+1F3A4 ; 8.0 # 👨🏼‍🎤 man singer: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F3A4 ; 8.0 # 👨🏽‍🎤 man singer: medium skin tone
U+1F468 U+1F3FE U+200D U+1F3A4 ; 8.0 # 👨🏾‍🎤 man singer: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F3A4 ; 8.0 # 👨🏿‍🎤 man singer: dark skin tone
U+1F469 U+200D U+1F3A4 ; 6.0 # 👩‍🎤 woman singer
U+1F469 U+1F3FB U+200D U+1F3A4 ; 8.0 # 👩🏻‍🎤 woman singer: light skin tone
U+1F469 U+1F3FC U+200D U+1F3A4 ; 8.0 # 👩🏼‍🎤 woman singer: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F3A4 ; 8.0 # 👩🏽‍🎤 woman singer: medium skin tone
U+1F469 U+1F3FE U+200D U+1F3A4 ; 8.0 # 👩🏾‍🎤 woman singer: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F3A4 ; 8.0 # 👩🏿‍🎤 woman singer: dark skin tone
U+1F468 U+200D U+1F3A8 ; 6.0 # 👨‍🎨 man artist
U+1F468 U+1F3FB U+200D U+1F3A8 ; 8.0 # 👨🏻‍🎨 man artist: light skin tone
U+1F468 U+1F3FC U+200D U+1F3A8 ; 8.0 # 👨🏼‍🎨 man artist: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F3A8 ; 8.0 # 👨🏽‍🎨 man artist: medium skin tone
U+1F468 U+1F3FE U+200D U+1F3A8 ; 8.0 # 👨🏾‍🎨 man artist: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F3A8 ; 8.0 # 👨🏿‍🎨 man artist: dark skin tone
U+1F469 U+200D U+1F3A8 ; 6.0 # 👩‍🎨 woman artist
U+1F469 U+1F3FB U+200D U+1F3A8 ; 8.0 # 👩🏻‍🎨 woman artist: light skin tone
U+1F469 U+1F3FC U+200D U+1F3A8 ; 8.0 # 👩🏼‍🎨 woman artist: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F3A8 ; 8.0 # 👩🏽‍🎨 woman artist: medium skin tone
U+1F469 U+1F3FE U+200D U+1F3A8 ; 8.0 # 👩🏾‍🎨 woman artist: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F3A8 ; 8.0 # 👩🏿‍🎨 woman artist: dark skin tone
U+1F468 U+200D U+2708 U+FE0F ; 6.0 # 👨‍✈️ man pilot
U+1F468 U+1F3FB U+200D U+2708 U+FE0F ; 8.0 # 👨🏻‍✈️ man pilot: light skin tone
U+1F468 U+1F3FC U+200D U+2708 U+FE0F ; 8.0 # 👨🏼‍✈️ man pilot: medium-light skin tone
U+1F468 U+1F3FD U+200D U+2708 U+FE0F ; 8.0 # 👨🏽‍✈️ man pilot: medium skin tone
U+1F468 U+1F3FE U+200D U+2708 U+FE0F ; 8.0 # 👨🏾‍✈️ man pilot: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+2708 U+FE0F ; 8.0 # 👨🏿‍✈️ man pilot: dark skin tone
U+1F469 U+200D U+2708 U+FE0F ; 6.0 # 👩‍✈️ woman pilot
U+1F469 U+1F3FB U+200D U+2708 U+FE0F ; 8.0 # 👩🏻‍✈️ woman pilot: light skin tone
U+1F469 U+1F3FC U+200D U+2708 U+FE0F ; 8.0 # 👩🏼‍✈️ woman pilot: medium-light skin tone
U+1F469 U+1F3FD U+200D U+2708 U+FE0F ; 8.0 # 👩🏽‍✈️ woman pilot: medium skin tone
U+1F469 U+1F3FE U+200D U+2708 U+FE0F ; 8.0 # 👩🏾‍✈️ woman pilot: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+2708 U+FE0F ; 8.0 # 👩🏿‍✈️ woman pilot: dark skin tone
U+1F468 U+200D U+1F680 ; 6.0 # 👨‍🚀 man astronaut
U+1F468 U+1F3FB U+200D U+1F680 ; 8.0 # 👨🏻‍🚀 man astronaut: light skin tone
U+1F468 U+1F3FC U+200D U+1F680 ; 8.0 # 👨🏼‍🚀 man astronaut: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F680 ; 8.0 # 👨🏽‍🚀 man astronaut: medium skin tone
U+1F468 U+1F3FE U+200D U+1F680 ; 8.0 # 👨🏾‍🚀 man astronaut: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F680 ; 8.0 # 👨🏿‍🚀 man astronaut: dark skin tone
U+1F469 U+200D U+1F680 ; 6.0 # 👩‍🚀 woman astronaut
U+1F469 U+1F3FB U+200D U+1F680 ; 8.0 # 👩🏻‍🚀 woman astronaut: light skin tone
U+1F469 U+1F3FC U+200D U+1F680 ; 8.0 # 👩🏼‍🚀 woman astronaut: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F680 ; 8.0 # 👩🏽‍🚀 woman astronaut: medium skin tone
U+1F469 U+1F3FE U+200D U+1F680 ; 8.0 # 👩🏾‍🚀 woman astronaut: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F680 ; 8.0 # 👩🏿‍🚀 woman astronaut: dark skin tone
U+1F468 U+200D U+1F692 ; 6.0 # 👨‍🚒 man firefighter
U+1F468 U+1F3FB U+200D U+1F692 ; 8.0 # 👨🏻‍🚒 man firefighter: light skin tone
U+1F468 U+1F3FC U+200D U+1F692 ; 8.0 # 👨🏼‍🚒 man firefighter: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F692 ; 8.0 # 👨🏽‍🚒 man firefighter: medium skin tone
U+1F468 U+1F3FE U+200D U+1F692 ; 8.0 # 👨🏾‍🚒 man firefighter: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F692 ; 8.0 # 👨🏿‍🚒 man firefighter: dark skin tone
U+1F469 U+200D U+1F692 ; 6.0 # 👩‍🚒 woman firefighter
U+1F469 U+1F3FB U+200D U+1F692 ; 8.0 # 👩🏻‍🚒 woman firefighter: light skin tone
U+1F469 U+1F3FC U+200D U+1F692 ; 8.0 # 👩🏼‍🚒 woman firefighter: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F692 ; 8.0 # 👩🏽‍🚒 woman firefighter: medium skin tone
U+1F469 U+1F3FE U+200D U+1F692 ; 8.0 # 👩🏾‍🚒 woman firefighter: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F692 ; 8.0 # 👩🏿‍🚒 woman firefighter: dark skin tone
U+1F46E ; 6.0 # 👮 police officer
U+1F46E U+1F3FB ; 8.0 # 👮🏻 police officer: light skin tone
U+1F46E U+1F3FC ; 8.0 # 👮🏼 police officer: medium-light skin tone
U+1F46E U+1F3FD ; 8.0 # 👮🏽 police officer: medium skin tone
U+1F46E U+1F3FE ; 8.0 # 👮🏾 police officer: medium-dark skin tone
U+1F46E U+1F3FF ; 8.0 # 👮🏿 police officer: dark skin tone
U+1F46E U+200D U+2642 U+FE0F ; 6.0 # 👮‍♂️ man police officer
U+1F46E U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 👮🏻‍♂️ man police officer: light skin tone
U+1F46E U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 👮🏼‍♂️ man police officer: medium-light skin tone
U+1F46E U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 👮🏽‍♂️ man police officer: medium skin tone
U+1F46E U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 👮🏾‍♂️ man police officer: medium-dark skin tone
U+1F46E U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 👮🏿‍♂️ man police officer: dark skin tone
U+1F46E U+200D U+2640 U+FE0F ; 6.0 # 👮‍♀️ woman police officer
U+1F46E U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 👮🏻‍♀️ woman police officer: light skin tone
U+1F46E U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 👮🏼‍♀️ woman police officer: medium-light skin tone
U+1F46E U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 👮🏽‍♀️ woman police officer: medium skin tone
U+1F46E U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 👮🏾‍♀️ woman police officer: medium-dark skin tone
U+1F46E U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 👮🏿‍♀️ woman police officer: dark skin tone
U+1F575 ; 7.0 # 🕵 detective
U+1F575 U+1F3FB ; 8.0 # 🕵🏻 detective: light skin tone
U+1F575 U+1F3FC ; 8.0 # 🕵🏼 detective: medium-light skin tone
U+1F575 U+1F3FD ; 8.0 # 🕵🏽 detective: medium skin tone
U+1F575 U+1F3FE ; 8.0 # 🕵🏾 detective: medium-dark skin tone
U+1F575 U+1F3FF ; 8.0 # 🕵🏿 detective: dark skin tone
U+1F575 U+FE0F U+200D U+2642 U+FE0F ; 7.0 # 🕵️‍♂️ man detective
U+1F575 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🕵🏻‍♂️ man detective: light skin tone
U+1F575 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🕵🏼‍♂️ man detective: medium-light skin tone
U+1F575 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🕵🏽‍♂️ man detective: medium skin tone
U+1F575 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🕵🏾‍♂️ man detective: medium-dark skin tone
U+1F575 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🕵🏿‍♂️ man detective: dark skin tone
U+1F575 U+FE0F U+200D U+2640 U+FE0F ; 7.0 # 🕵️‍♀️ woman detective
U+1F575 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🕵🏻‍♀️ woman detective: light skin tone
U+1F575 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🕵🏼‍♀️ woman detective: medium-light skin tone
U+1F575 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🕵🏽‍♀️ woman detective: medium skin tone
U+1F575 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🕵🏾‍♀️ woman detective: medium-dark skin tone
U+1F575 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🕵🏿‍♀️ woman detective: dark skin tone
U+1F482 ; 6.0 # 💂 guard
U+1F482 U+1F3FB ; 8.0 # 💂🏻 guard: light skin tone
U+1F482 U+1F3FC ; 8.0 # 💂🏼 guard: medium-light skin tone
U+1F482 U+1F3FD ; 8.0 # 💂🏽 guard: medium skin tone
U+1F482 U+1F3FE ; 8.0 # 💂🏾 guard: medium-dark skin tone
U+1F482 U+1F3FF ; 8.0 # 💂🏿 guard: dark skin tone
U+1F482 U+200D U+2642 U+FE0F ; 6.0 # 💂‍♂️ man guard
U+1F482 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 💂🏻‍♂️ man guard: light skin tone
U+1F482 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 💂🏼‍♂️ man guard: medium-light skin tone
U+1F482 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 💂🏽‍♂️ man guard: medium skin tone
U+1F482 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 💂🏾‍♂️ man guard: medium-dark skin tone
U+1F482 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 💂🏿‍♂️ man guard: dark skin tone
U+1F482 U+200D U+2640 U+FE0F ; 6.0 # 💂‍♀️ woman guard
U+1F482 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 💂🏻‍♀️ woman guard: light skin tone
U+1F482 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 💂🏼‍♀️ woman guard: medium-light skin tone
U+1F482 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 💂🏽‍♀️ woman guard: medium skin tone
U+1F482 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 💂🏾‍♀️ woman guard: medium-dark skin tone
U+1F482 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 💂🏿‍♀️ woman guard: dark skin tone
U+1F477 ; 6.0 # 👷 construction worker
U+1F477 U+1F3FB ; 8.0 # 👷🏻 construction worker: light skin tone
U+1F477 U+1F3FC ; 8.0 # 👷🏼 construction worker: medium-light skin tone
U+1F477 U+1F3FD ; 8.0 # 👷🏽 construction worker: medium skin tone
U+1F477 U+1F3FE ; 8.0 # 👷🏾 construction worker: medium-dark skin tone
U+1F477 U+1F3FF ; 8.0 # 👷🏿 construction worker: dark skin tone
U+1F477 U+200D U+2642 U+FE0F ; 6.0 # 👷‍♂️ man construction worker
U+1F477 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 👷🏻‍♂️ man construction worker: light skin tone
U+1F477 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 👷🏼‍♂️ man construction worker: medium-light skin tone
U+1F477 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 👷🏽‍♂️ man construction worker: medium skin tone
U+1F477 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 👷🏾‍♂️ man construction worker: medium-dark skin tone
U+1F477 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 👷🏿‍♂️ man construction worker: dark skin tone
U+1F477 U+200D U+2640 U+FE0F ; 6.0 # 👷‍♀️ woman construction worker
U+1F477 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 👷🏻‍♀️ woman construction worker: light skin tone
U+1F477 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 👷🏼‍♀️ woman construction worker: medium-light skin tone
U+1F477 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 👷🏽‍♀️ woman construction worker: medium skin tone
U+1F477 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 👷🏾‍♀️ woman construction worker: medium-dark skin tone
U+1F477 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 👷🏿‍♀️ woman construction worker: dark skin tone
U+1F934 ; 9.0 # 🤴 prince
U+1F934 U+1F3FB ; 9.0 # 🤴🏻 prince: light skin tone
U+1F934 U+1F3FC ; 9.0 # 🤴🏼 prince: medium-light skin tone
U+1F934 U+1F3FD ; 9.0 # 🤴🏽 prince: medium skin tone
U+1F934 U+1F3FE ; 9.0 # 🤴🏾 prince: medium-dark skin tone
U+1F934 U+1F3FF ; 9.0 # 🤴🏿 prince: dark skin tone
U+1F478 ; 6.0 # 👸 princess
U+1F478 U+1F3FB ; 8.0 # 👸🏻 princess: light skin tone
U+1F478 U+1F3FC ; 8.0 # 👸🏼 princess: medium-light skin tone
U+1F478 U+1F3FD ; 8.0 # 👸🏽 princess: medium skin tone
U+1F478 U+1F3FE ; 8.0 # 👸🏾 princess: medium-dark skin tone
U+1F478 U+1F3FF ; 8.0 # 👸🏿 princess: dark skin tone
U+1F473 ; 6.0 # 👳 person wearing turban
U+1F473 U+1F3FB ; 8.0 # 👳🏻 person wearing turban: light skin tone
U+1F473 U+1F3FC ; 8.0 # 👳🏼 person wearing turban: medium-light skin tone
U+1F473 U+1F3FD ; 8.0 # 👳🏽 person wearing turban: medium skin tone
U+1F473 U+1F3FE ; 8.0 # 👳🏾 person wearing turban: medium-dark skin tone
U+1F473 U+1F3FF ; 8.0 # 👳🏿 person wearing turban: dark skin tone
U+1F473 U+200D U+2642 U+FE0F ; 6.0 # 👳‍♂️ man wearing turban
U+1F473 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 👳🏻‍♂️ man wearing turban: light skin tone
U+1F473 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 👳🏼‍♂️ man wearing turban: medium-light skin tone
U+1F473 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 👳🏽‍♂️ man wearing turban: medium skin tone
U+1F473 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 👳🏾‍♂️ man wearing turban: medium-dark skin tone
U+1F473 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 👳🏿‍♂️ man wearing turban: dark skin tone
U+1F473 U+200D U+2640 U+FE0F ; 6.0 # 👳‍♀️ woman wearing turban
U+1F473 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 👳🏻‍♀️ woman wearing turban: light skin tone
U+1F473 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 👳🏼‍♀️ woman wearing turban: medium-light skin tone
U+1F473 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 👳🏽‍♀️ woman wearing turban: medium skin tone
U+1F473 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 👳🏾‍♀️ woman wearing turban: medium-dark skin tone
U+1F473 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 👳🏿‍♀️ woman wearing turban: dark skin tone
U+1F472 ; 6.0 # 👲 man with Chinese cap
U+1F472 U+1F3FB ; 8.0 # 👲🏻 man with Chinese cap: light skin tone
U+1F472 U+1F3FC ; 8.0 # 👲🏼 man with Chinese cap: medium-light skin tone
U+1F472 U+1F3FD ; 8.0 # 👲🏽 man with Chinese cap: medium skin tone
U+1F472 U+1F3FE ; 8.0 # 👲🏾 man with Chinese cap: medium-dark skin tone
U+1F472 U+1F3FF ; 8.0 # 👲🏿 man with Chinese cap: dark skin tone
U+1F9D5 ; 10.0 # 🧕 woman with headscarf
U+1F9D5 U+1F3FB ; 10.0 # 🧕🏻 woman with headscarf: light skin tone
U+1F9D5 U+1F3FC ; 10.0 # 🧕🏼 woman with headscarf: medium-light skin tone
U+1F9D5 U+1F3FD ; 10.0 # 🧕🏽 woman with headscarf: medium skin tone
U+1F9D5 U+1F3FE ; 10.0 # 🧕🏾 woman with headscarf: medium-dark skin tone
U+1F9D5 U+1F3FF ; 10.0 # 🧕🏿 woman with headscarf: dark skin tone
U+1F935 ; 9.0 # 🤵 man in tuxedo
U+1F935 U+1F3FB ; 9.0 # 🤵🏻 man in tuxedo: light skin tone
U+1F935 U+1F3FC ; 9.0 # 🤵🏼 man in tuxedo: medium-light skin tone
U+1F935 U+1F3FD ; 9.0 # 🤵🏽 man in tuxedo: medium skin tone
U+1F935 U+1F3FE ; 9.0 # 🤵🏾 man in tuxedo: medium-dark skin tone
U+1F935 U+1F3FF ; 9.0 # 🤵🏿 man in tuxedo: dark skin tone
U+1F470 ; 6.0 # 👰 bride with veil
U+1F470 U+1F3FB ; 8.0 # 👰🏻 bride with veil: light skin tone
U+1F470 U+1F3FC ; 8.0 # 👰🏼 bride with veil: medium-light skin tone
U+1F470 U+1F3FD ; 8.0 # 👰🏽 bride with veil: medium skin tone
U+1F470 U+1F3FE ; 8.0 # 👰🏾 bride with veil: medium-dark skin tone
U+1F470 U+1F3FF ; 8.0 # 👰🏿 bride with veil: dark skin tone
U+1F930 ; 9.0 # 🤰 pregnant woman
U+1F930 U+1F3FB ; 9.0 # 🤰🏻 pregnant woman: light skin tone
U+1F930 U+1F3FC ; 9.0 # 🤰🏼 pregnant woman: medium-light skin tone
U+1F930 U+1F3FD ; 9.0 # 🤰🏽 pregnant woman: medium skin tone
U+1F930 U+1F3FE ; 9.0 # 🤰🏾 pregnant woman: medium-dark skin tone
U+1F930 U+1F3FF ; 9.0 # 🤰🏿 pregnant woman: dark skin tone
U+1F931 ; 10.0 # 🤱 breast-feeding
U+1F931 U+1F3FB ; 10.0 # 🤱🏻 breast-feeding: light skin tone
U+1F931 U+1F3FC ; 10.0 # 🤱🏼 breast-feeding: medium-light skin tone
U+1F931 U+1F3FD ; 10.0 # 🤱🏽 breast-feeding: medium skin tone
U+1F931 U+1F3FE ; 10.0 # 🤱🏾 breast-feeding: medium-dark skin tone
U+1F931 U+1F3FF ; 10.0 # 🤱🏿 breast-feeding: dark skin tone
U+1F47C ; 6.0 # 👼 baby angel
U+1F47C U+1F3FB ; 8.0 # 👼🏻 baby angel: light skin tone
U+1F47C U+1F3FC ; 8.0 # 👼🏼 baby angel: medium-light skin tone
U+1F47C U+1F3FD ; 8.0 # 👼🏽 baby angel: medium skin tone
U+1F47C U+1F3FE ; 8.0 # 👼🏾 baby angel: medium-dark skin tone
U+1F47C U+1F3FF ; 8.0 # 👼🏿 baby angel: dark skin tone
U+1F385 ; 6.0 # 🎅 Santa Claus
U+1F385 U+1F3FB ; 8.0 # 🎅🏻 Santa Claus: light skin tone
U+1F385 U+1F3FC ; 8.0 # 🎅🏼 Santa Claus: medium-light skin tone
U+1F385 U+1F3FD ; 8.0 # 🎅🏽 Santa Claus: medium skin tone
U+1F385 U+1F3FE ; 8.0 # 🎅🏾 Santa Claus: medium-dark skin tone
U+1F385 U+1F3FF ; 8.0 # 🎅🏿 Santa Claus: dark skin tone
U+1F936 ; 9.0 # 🤶 Mrs. Claus
U+1F936 U+1F3FB ; 9.0 # 🤶🏻 Mrs. Claus: light skin tone
U+1F936 U+1F3FC ; 9.0 # 🤶🏼 Mrs. Claus: medium-light skin tone
U+1F936 U+1F3FD ; 9.0 # 🤶🏽 Mrs. Claus: medium skin tone
U+1F936 U+1F3FE ; 9.0 # 🤶🏾 Mrs. Claus: medium-dark skin tone
U+1F936 U+1F3FF ; 9.0 # 🤶🏿 Mrs. Claus: dark skin tone
U+1F9B8 ; 11.0 # 🦸 superhero
U+1F9B8 U+1F3FB ; 11.0 # 🦸🏻 superhero: light skin tone
U+1F9B8 U+1F3FC ; 11.0 # 🦸🏼 superhero: medium-light skin tone
U+1F9B8 U+1F3FD ; 11.0 # 🦸🏽 superhero: medium skin tone
U+1F9B8 U+1F3FE ; 11.0 # 🦸🏾 superhero: medium-dark skin tone
U+1F9B8 U+1F3FF ; 11.0 # 🦸🏿 superhero: dark skin tone
U+1F9B8 U+200D U+2642 U+FE0F ; 11.0 # 🦸‍♂️ man superhero
U+1F9B8 U+1F3FB U+200D U+2642 U+FE0F ; 11.0 # 🦸🏻‍♂️ man superhero: light skin tone
U+1F9B8 U+1F3FC U+200D U+2642 U+FE0F ; 11.0 # 🦸🏼‍♂️ man superhero: medium-light skin tone
U+1F9B8 U+1F3FD U+200D U+2642 U+FE0F ; 11.0 # 🦸🏽‍♂️ man superhero: medium skin tone
U+1F9B8 U+1F3FE U+200D U+2642 U+FE0F ; 11.0 # 🦸🏾‍♂️ man superhero: medium-dark skin tone
U+1F9B8 U+1F3FF U+200D U+2642 U+FE0F ; 11.0 # 🦸🏿‍♂️ man superhero: dark skin tone
U+1F9B8 U+200D U+2640 U+FE0F ; 11.0 # 🦸‍♀️ woman superhero
U+1F9B8 U+1F3FB U+200D U+2640 U+FE0F ; 11.0 # 🦸🏻‍♀️ woman superhero: light skin tone
U+1F9B8 U+1F3FC U+200D U+2640 U+FE0F ; 11.0 # 🦸🏼‍♀️ woman superhero: medium-light skin tone
U+1F9B8 U+1F3FD U+200D U+2640 U+FE0F ; 11.0 # 🦸🏽‍♀️ woman superhero: medium skin tone
U+1F9B8 U+1F3FE U+200D U+2640 U+FE0F ; 11.0 # 🦸🏾‍♀️ woman superhero: medium-dark skin tone
U+1F9B8 U+1F3FF U+200D U+2640 U+FE0F ; 11.0 # 🦸🏿‍♀️ woman superhero: dark skin tone
U+1F9B9 ; 11.0 # 🦹 supervillain
U+1F9B9 U+1F3FB ; 11.0 # 🦹🏻 supervillain: light skin tone
U+1F9B9 U+1F3FC ; 11.0 # 🦹🏼 supervillain: medium-light skin tone
U+1F9B9 U+1F3FD ; 11.0 # 🦹🏽 supervillain: medium skin tone
U+1F9B9 U+1F3FE ; 11.0 # 🦹🏾 supervillain: medium-dark skin tone
U+1F9B9 U+1F3FF ; 11.0 # 🦹🏿 supervillain: dark skin tone
U+1F9B9 U+200D U+2642 U+FE0F ; 11.0 # 🦹‍♂️ man supervillain
U+1F9B9 U+1F3FB U+200D U+2642 U+FE0F ; 11.0 # 🦹🏻‍♂️ man supervillain: light skin tone
U+1F9B9 U+1F3FC U+200D U+2642 U+FE0F ; 11.0 # 🦹🏼‍♂️ man supervillain: medium-light skin tone
U+1F9B9 U+1F3FD U+200D U+2642 U+FE0F ; 11.0 # 🦹🏽‍♂️ man supervillain: medium skin tone
U+1F9B9 U+1F3FE U+200D U+2642 U+FE0F ; 11.0 # 🦹🏾‍♂️ man supervillain: medium-dark skin tone
U+1F9B9 U+1F3FF U+200D U+2642 U+FE0F ; 11.0 # 🦹🏿‍♂️ man supervillain: dark skin tone
U+1F9B9 U+200D U+2640 U+FE0F ; 11.0 # 🦹‍♀️ woman supervillain
U+1F9B9 U+1F3FB U+200D U+2640 U+FE0F ; 11.0 # 🦹🏻‍♀️ woman supervillain: light skin tone
U+1F9B9 U+1F3FC U+200D U+2640 U+FE0F ; 11.0 # 🦹🏼‍♀️ woman supervillain: medium-light skin tone
U+1F9B9 U+1F3FD U+200D U+2640 U+FE0F ; 11.0 # 🦹🏽‍♀️ woman supervillain: medium skin tone
U+1F9B9 U+1F3FE U+200D U+2640 U+FE0F ; 11.0 # 🦹🏾‍♀️ woman supervillain: medium-dark skin tone
U+1F9B9 U+1F3FF U+200D U+2640 U+FE0F ; 11.0 # 🦹🏿‍♀️ woman supervillain: dark skin tone
U+1F9D9 ; 10.0 # 🧙 mage
U+1F9D9 U+1F3FB ; 10.0 # 🧙🏻 mage: light skin tone
U+1F9D9 U+1F3FC ; 10.0 # 🧙🏼 mage: medium-light skin tone
U+1F9D9 U+1F3FD ; 10.0 # 🧙🏽 mage: medium skin tone
U+1F9D9 U+1F3FE ; 10.0 # 🧙🏾 mage: medium-dark skin tone
U+1F9D9 U+1F3FF ; 10.0 # 🧙🏿 mage: dark skin tone
U+1F9D9 U+200D U+2642 U+FE0F ; 10.0 # 🧙‍♂️ man mage
U+1F9D9 U+1F3FB U+200D U+2642 U+FE0F ; 10.0 # 🧙🏻‍♂️ man mage: light skin tone
U+1F9D9 U+1F3FC U+200D U+2642 U+FE0F ; 10.0 # 🧙🏼‍♂️ man mage: medium-light skin tone
U+1F9D9 U+1F3FD U+200D U+2642 U+FE0F ; 10.0 # 🧙🏽‍♂️ man mage: medium skin tone
U+1F9D9 U+1F3FE U+200D U+2642 U+FE0F ; 10.0 # 🧙🏾‍♂️ man mage: medium-dark skin tone
U+1F9D9 U+1F3FF U+200D U+2642 U+FE0F ; 10.0 # 🧙🏿‍♂️ man mage: dark skin tone
U+1F9D9 U+200D U+2640 U+FE0F ; 10.0 # 🧙‍♀️ woman mage
U+1F9D9 U+1F3FB U+200D U+2640 U+FE0F ; 10.0 # 🧙🏻‍♀️ woman mage: light skin tone
U+1F9D9 U+1F3FC U+200D U+2640 U+FE0F ; 10.0 # 🧙🏼‍♀️ woman mage: medium-light skin tone
U+1F9D9 U+1F3FD U+200D U+2640 U+FE0F ; 10.0 # 🧙🏽‍♀️ woman mage: medium skin tone
U+1F9D9 U+1F3FE U+200D U+2640 U+FE0F ; 10.0 # 🧙🏾‍♀️ woman mage: medium-dark skin tone
U+1F9D9 U+1F3FF U+200D U+2640 U+FE0F ; 10.0 # 🧙🏿‍♀️ woman mage: dark skin tone
U+1F9DA ; 10.0 # 🧚 fairy
U+1F9DA U+1F3FB ; 10.0 # 🧚🏻 fairy: light skin tone
U+1F9DA U+1F3FC ; 10.0 # 🧚🏼 fairy: medium-light skin tone
U+1F9DA U+1F3FD ; 10.0 # 🧚🏽 fairy: medium skin tone
U+1F9DA U+1F3FE ; 10.0 # 🧚🏾 fairy: medium-dark skin tone
U+1F9DA U+1F3FF ; 10.0 # 🧚🏿 fairy: dark skin tone
U+1F9DA U+200D U+2642 U+FE0F ; 10.0 # 🧚‍♂️ man fairy
U+1F9DA U+1F3FB U+200D U+2642 U+FE0F ; 10.0 # 🧚🏻‍♂️ man fairy: light skin tone
U+1F9DA U+1F3FC U+200D U+2642 U+FE0F ; 10.0 # 🧚🏼‍♂️ man fairy: medium-light skin tone
U+1F9DA U+1F3FD U+200D U+2642 U+FE0F ; 10.0 # 🧚🏽‍♂️ man fairy: medium skin tone
U+1F9DA U+1F3FE U+200D U+2642 U+FE0F ; 10.0 # 🧚🏾‍♂️ man fairy: medium-dark skin tone
U+1F9DA U+1F3FF U+200D U+2642 U+FE0F ; 10.0 # 🧚🏿‍♂️ man fairy: dark skin tone
U+1F9DA U+200D U+2640 U+FE0F ; 10.0 # 🧚‍♀️ woman fairy
U+1F9DA U+1F3FB U+200D U+2640 U+FE0F ; 10.0 # 🧚🏻‍♀️ woman fairy: light skin tone
U+1F9DA U+1F3FC U+200D U+2640 U+FE0F ; 10.0 # 🧚🏼‍♀️ woman fairy: medium-light skin tone
U+1F9DA U+1F3FD U+200D U+2640 U+FE0F ; 10.0 # 🧚🏽‍♀️ woman fairy: medium skin tone
U+1F9DA U+1F3FE U+200D U+2640 U+FE0F ; 10.0 # 🧚🏾‍♀️ woman fairy: medium-dark skin tone
U+1F9DA U+1F3FF U+200D U+2640 U+FE0F ; 10.0 # 🧚🏿‍♀️ woman fairy: dark skin tone
U+1F9DB ; 10.0 # 🧛 vampire
U+1F9DB U+1F3FB ; 10.0 # 🧛🏻 vampire: light skin tone
U+1F9DB U+1F3FC ; 10.0 # 🧛🏼 vampire: medium-light skin tone
U+1F9DB U+1F3FD ; 10.0 # 🧛🏽 vampire: medium skin tone
U+1F9DB U+1F3FE ; 10.0 # 🧛🏾 vampire: medium-dark skin tone
U+1F9DB U+1F3FF ; 10.0 # 🧛🏿 vampire: dark skin tone
U+1F9DB U+200D U+2642 U+FE0F ; 10.0 # 🧛‍♂️ man vampire
U+1F9DB U+1F3FB U+200D U+2642 U+FE0F ; 10.0 # 🧛🏻‍♂️ man vampire: light skin tone
U+1F9DB U+1F3FC U+200D U+2642 U+FE0F ; 10.0 # 🧛🏼‍♂️ man vampire: medium-light skin tone
U+1F9DB U+1F3FD U+200D U+2642 U+FE0F ; 10.0 # 🧛🏽‍♂️ man vampire: medium skin tone
U+1F9DB U+1F3FE U+200D U+2642 U+FE0F ; 10.0 # 🧛🏾‍♂️ man vampire: medium-dark skin tone
U+1F9DB U+1F3FF U+200D U+2642 U+FE0F ; 10.0 # 🧛🏿‍♂️ man vampire: dark skin tone
U+1F9DB U+200D U+2640 U+FE0F ; 10.0 # 🧛‍♀️ woman vampire
U+1F9DB U+1F3FB U+200D U+2640 U+FE0F ; 10.0 # 🧛🏻‍♀️ woman vampire: light skin tone
U+1F9DB U+1F3FC U+200D U+2640 U+FE0F ; 10.0 # 🧛🏼‍♀️ woman vampire: medium-light skin tone
U+1F9DB U+1F3FD U+200D U+2640 U+FE0F ; 10.0 # 🧛🏽‍♀️ woman vampire: medium skin tone
U+1F9DB U+1F3FE U+200D U+2640 U+FE0F ; 10.0 # 🧛🏾‍♀️ woman vampire: medium-dark skin tone
U+1F9DB U+1F3FF U+200D U+2640 U+FE0F ; 10.0 # 🧛🏿‍♀️ woman vampire: dark skin tone
U+1F9DC ; 10.0 # 🧜 merperson
U+1F9DC U+1F3FB ; 10.0 # 🧜🏻 merperson: light skin tone
U+1F9DC U+1F3FC ; 10.0 # 🧜🏼 merperson: medium-light skin tone
U+1F9DC U+1F3FD ; 10.0 # 🧜🏽 merperson: medium skin tone
U+1F9DC U+1F3FE ; 10.0 # 🧜🏾 merperson: medium-dark skin tone
U+1F9DC U+1F3FF ; 10.0 # 🧜🏿 merperson: dark skin tone
U+1F9DC U+200D U+2642 U+FE0F ; 10.0 # 🧜‍♂️ merman
U+1F9DC U+1F3FB U+200D U+2642 U+FE0F ; 10.0 # 🧜🏻‍♂️ merman: light skin tone
U+1F9DC U+1F3FC U+200D U+2642 U+FE0F ; 10.0 # 🧜🏼‍♂️ merman: medium-light skin tone
U+1F9DC U+1F3FD U+200D U+2642 U+FE0F ; 10.0 # 🧜🏽‍♂️ merman: medium skin tone
U+1F9DC U+1F3FE U+200D U+2642 U+FE0F ; 10.0 # 🧜🏾‍♂️ merman: medium-dark skin tone
U+1F9DC U+1F3FF U+200D U+2642 U+FE0F ; 10.0 # 🧜🏿‍♂️ merman: dark skin tone
U+1F9DC U+200D U+2640 U+FE0F ; 10.0 # 🧜‍♀️ mermaid
U+1F9DC U+1F3FB U+200D U+2640 U+FE0F ; 10.0 # 🧜🏻‍♀️ mermaid: light skin tone
U+1F9DC U+1F3FC U+200D U+2640 U+FE0F ; 10.0 # 🧜🏼‍♀️ mermaid: medium-light skin tone
U+1F9DC U+1F3FD U+200D U+2640 U+FE0F ; 10.0 # 🧜🏽‍♀️ mermaid: medium skin tone
U+1F9DC U+1F3FE U+200D U+2640 U+FE0F ; 10.0 # 🧜🏾‍♀️ mermaid: medium-dark skin tone
U+1F9DC U+1F3FF U+200D U+2640 U+FE0F ; 10.0 # 🧜🏿‍♀️ mermaid: dark skin tone
U+1F9DD ; 10.0 # 🧝 elf
U+1F9DD U+1F3FB ; 10.0 # 🧝🏻 elf: light skin tone
U+1F9DD U+1F3FC ; 10.0 # 🧝🏼 elf: medium-light skin tone
U+1F9DD U+1F3FD ; 10.0 # 🧝🏽 elf: medium skin tone
U+1F9DD U+1F3FE ; 10.0 # 🧝🏾 elf: medium-dark skin tone
U+1F9DD U+1F3FF ; 10.0 # 🧝🏿 elf: dark skin tone
U+1F9DD U+200D U+2642 U+FE0F ; 10.0 # 🧝‍♂️ man elf
U+1F9DD U+1F3FB U+200D U+2642 U+FE0F ; 10.0 # 🧝🏻‍♂️ man elf: light skin tone
U+1F9DD U+1F3FC U+200D U+2642 U+FE0F ; 10.0 # 🧝🏼‍♂️ man elf: medium-light skin tone
U+1F9DD U+1F3FD U+200D U+2642 U+FE0F ; 10.0 # 🧝🏽‍♂️ man elf: medium skin tone
U+1F9DD U+1F3FE U+200D U+2642 U+FE0F ; 10.0 # 🧝🏾‍♂️ man elf: medium-dark skin tone
U+1F9DD U+1F3FF U+200D U+2642 U+FE0F ; 10.0 # 🧝🏿‍♂️ man elf: dark skin tone
U+1F9DD U+200D U+2640 U+FE0F ; 10.0 # 🧝‍♀️ woman elf
U+1F9DD U+1F3FB U+200D U+2640 U+FE0F ; 10.0 # 🧝🏻‍♀️ woman elf: light skin tone
U+1F9DD U+1F3FC U+200D U+2640 U+FE0F ; 10.0 # 🧝🏼‍♀️ woman elf: medium-light skin tone
U+1F9DD U+1F3FD U+200D U+2640 U+FE0F ; 10.0 # 🧝🏽‍♀️ woman elf: medium skin tone
U+1F9DD U+1F3FE U+200D U+2640 U+FE0F ; 10.0 # 🧝🏾‍♀️ woman elf: medium-dark skin tone
U+1F9DD U+1F3FF U+200D U+2640 U+FE0F ; 10.0 # 🧝🏿‍♀️ woman elf: dark skin tone
U+1F9DE ; 10.0 # 🧞 genie
U+1F9DE U+200D U+2642 U+FE0F ; 10.0 # 🧞‍♂️ man genie
U+1F9DE U+200D U+2640 U+FE0F ; 10.0 # 🧞‍♀️ woman genie
U+1F9DF ; 10.0 # 🧟 zombie
U+1F9DF U+200D U+2642 U+FE0F ; 10.0 # 🧟‍♂️ man zombie
U+1F9DF U+200D U+2640 U+FE0F ; 10.0 # 🧟‍♀️ woman zombie
U+1F486 ; 6.0 # 💆 person getting massage
U+1F486 U+1F3FB ; 8.0 # 💆🏻 person getting massage: light skin tone
U+1F486 U+1F3FC ; 8.0 # 💆🏼 person getting massage: medium-light skin tone
U+1F486 U+1F3FD ; 8.0 # 💆🏽 person getting massage: medium skin tone
U+1F486 U+1F3FE ; 8.0 # 💆🏾 person getting massage: medium-dark skin tone
U+1F486 U+1F3FF ; 8.0 # 💆🏿 person getting massage: dark skin tone
U+1F486 U+200D U+2642 U+FE0F ; 6.0 # 💆‍♂️ man getting massage
U+1F486 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 💆🏻‍♂️ man getting massage: light skin tone
U+1F486 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 💆🏼‍♂️ man getting massage: medium-light skin tone
U+1F486 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 💆🏽‍♂️ man getting massage: medium skin tone
U+1F486 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 💆🏾‍♂️ man getting massage: medium-dark skin tone
U+1F486 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 💆🏿‍♂️ man getting massage: dark skin tone
U+1F486 U+200D U+2640 U+FE0F ; 6.0 # 💆‍♀️ woman getting massage
U+1F486 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 💆🏻‍♀️ woman getting massage: light skin tone
U+1F486 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 💆🏼‍♀️ woman getting massage: medium-light skin tone
U+1F486 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 💆🏽‍♀️ woman getting massage: medium skin tone
U+1F486 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 💆🏾‍♀️ woman getting massage: medium-dark skin tone
U+1F486 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 💆🏿‍♀️ woman getting massage: dark skin tone
U+1F487 ; 6.0 # 💇 person getting haircut
U+1F487 U+1F3FB ; 8.0 # 💇🏻 person getting haircut: light skin tone
U+1F487 U+1F3FC ; 8.0 # 💇🏼 person getting haircut: medium-light skin tone
U+1F487 U+1F3FD ; 8.0 # 💇🏽 person getting haircut: medium skin tone
U+1F487 U+1F3FE ; 8.0 # 💇🏾 person getting haircut: medium-dark skin tone
U+1F487 U+1F3FF ; 8.0 # 💇🏿 person getting haircut: dark skin tone
U+1F487 U+200D U+2642 U+FE0F ; 6.0 # 💇‍♂️ man getting haircut
U+1F487 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 💇🏻‍♂️ man getting haircut: light skin tone
U+1F487 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 💇🏼‍♂️ man getting haircut: medium-light skin tone
U+1F487 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 💇🏽‍♂️ man getting haircut: medium skin tone
U+1F487 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 💇🏾‍♂️ man getting haircut: medium-dark skin tone
U+1F487 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 💇🏿‍♂️ man getting haircut: dark skin tone
U+1F487 U+200D U+2640 U+FE0F ; 6.0 # 💇‍♀️ woman getting haircut
U+1F487 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 💇🏻‍♀️ woman getting haircut: light skin tone
U+1F487 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 💇🏼‍♀️ woman getting haircut: medium-light skin tone
U+1F487 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 💇🏽‍♀️ woman getting haircut: medium skin tone
U+1F487 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 💇🏾‍♀️ woman getting haircut: medium-dark skin tone
U+1F487 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 💇🏿‍♀️ woman getting haircut: dark skin tone
U+1F6B6 ; 6.0 # 🚶 person walking
U+1F6B6 U+1F3FB ; 8.0 # 🚶🏻 person walking: light skin tone
U+1F6B6 U+1F3FC ; 8.0 # 🚶🏼 person walking: medium-light skin tone
U+1F6B6 U+1F3FD ; 8.0 # 🚶🏽 person walking: medium skin tone
U+1F6B6 U+1F3FE ; 8.0 # 🚶🏾 person walking: medium-dark skin tone
U+1F6B6 U+1F3FF ; 8.0 # 🚶🏿 person walking: dark skin tone
U+1F6B6 U+200D U+2642 U+FE0F ; 6.0 # 🚶‍♂️ man walking
U+1F6B6 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🚶🏻‍♂️ man walking: light skin tone
U+1F6B6 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🚶🏼‍♂️ man walking: medium-light skin tone
U+1F6B6 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🚶🏽‍♂️ man walking: medium skin tone
U+1F6B6 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🚶🏾‍♂️ man walking: medium-dark skin tone
U+1F6B6 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🚶🏿‍♂️ man walking: dark skin tone
U+1F6B6 U+200D U+2640 U+FE0F ; 6.0 # 🚶‍♀️ woman walking
U+1F6B6 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🚶🏻‍♀️ woman walking: light skin tone
U+1F6B6 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🚶🏼‍♀️ woman walking: medium-light skin tone
U+1F6B6 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🚶🏽‍♀️ woman walking: medium skin tone
U+1F6B6 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🚶🏾‍♀️ woman walking: medium-dark skin tone
U+1F6B6 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🚶🏿‍♀️ woman walking: dark skin tone
U+1F9CD ; 12.0 # 🧍 person standing
U+1F9CD U+1F3FB ; 12.0 # 🧍🏻 person standing: light skin tone
U+1F9CD U+1F3FC ; 12.0 # 🧍🏼 person standing: medium-light skin tone
U+1F9CD U+1F3FD ; 12.0 # 🧍🏽 person standing: medium skin tone
U+1F9CD U+1F3FE ; 12.0 # 🧍🏾 person standing: medium-dark skin tone
U+1F9CD U+1F3FF ; 12.0 # 🧍🏿 person standing: dark skin tone
U+1F9CD U+200D U+2642 U+FE0F ; 12.0 # 🧍‍♂️ man standing
U+1F9CD U+1F3FB U+200D U+2642 U+FE0F ; 12.0 # 🧍🏻‍♂️ man standing: light skin tone
U+1F9CD U+1F3FC U+200D U+2642 U+FE0F ; 12.0 # 🧍🏼‍♂️ man standing: medium-light skin tone
U+1F9CD U+1F3FD U+200D U+2642 U+FE0F ; 12.0 # 🧍🏽‍♂️ man standing: medium skin tone
U+1F9CD U+1F3FE U+200D U+2642 U+FE0F ; 12.0 # 🧍🏾‍♂️ man standing: medium-dark skin tone
U+1F9CD U+1F3FF U+200D U+2642 U+FE0F ; 12.0 # 🧍🏿‍♂️ man standing: dark skin tone
U+1F9CD U+200D U+2640 U+FE0F ; 12.0 # 🧍‍♀️ woman standing
U+1F9CD U+1F3FB U+200D U+2640 U+FE0F ; 12.0 # 🧍🏻‍♀️ woman standing: light skin tone
U+1F9CD U+1F3FC U+200D U+2640 U+FE0F ; 12.0 # 🧍🏼‍♀️ woman standing: medium-light skin tone
U+1F9CD U+1F3FD U+200D U+2640 U+FE0F ; 12.0 # 🧍🏽‍♀️ woman standing: medium skin tone
U+1F9CD U+1F3FE U+200D U+2640 U+FE0F ; 12.0 # 🧍🏾‍♀️ woman standing: medium-dark skin tone
U+1F9CD U+1F3FF U+200D U+2640 U+FE0F ; 12.0 # 🧍🏿‍♀️ woman standing: dark skin tone
U+1F9CE ; 12.0 # 🧎 person kneeling
U+1F9CE U+1F3FB ; 12.0 # 🧎🏻 person kneeling: light skin tone
U+1F9CE U+1F3FC ; 12.0 # 🧎🏼 person kneeling: medium-light skin tone
U+1F9CE U+1F3FD ; 12.0 # 🧎🏽 person kneeling: medium skin tone
U+1F9CE U+1F3FE ; 12.0 # 🧎🏾 person kneeling: medium-dark skin tone
U+1F9CE U+1F3FF ; 12.0 # 🧎🏿 person kneeling: dark skin tone
U+1F9CE U+200D U+2642 U+FE0F ; 12.0 # 🧎‍♂️ man kneeling
U+1F9CE U+1F3FB U+200D U+2642 U+FE0F ; 12.0 # 🧎🏻‍♂️ man kneeling: light skin tone
U+1F9CE U+1F3FC U+200D U+2642 U+FE0F ; 12.0 # 🧎🏼‍♂️ man kneeling: medium-light skin tone
U+1F9CE U+1F3FD U+200D U+2642 U+FE0F ; 12.0 # 🧎🏽‍♂️ man kneeling: medium skin tone
U+1F9CE U+1F3FE U+200D U+2642 U+FE0F ; 12.0 # 🧎🏾‍♂️ man kneeling: medium-dark skin tone
U+1F9CE U+1F3FF U+200D U+2642 U+FE0F ; 12.0 # 🧎🏿‍♂️ man kneeling: dark skin tone
U+1F9CE U+200D U+2640 U+FE0F ; 12.0 # 🧎‍♀️ woman kneeling
U+1F9CE U+1F3FB U+200D U+2640 U+FE0F ; 12.0 # 🧎🏻‍♀️ woman kneeling: light skin tone
U+1F9CE U+1F3FC U+200D U+2640 U+FE0F ; 12.0 # 🧎🏼‍♀️ woman kneeling: medium-light skin tone
U+1F9CE U+1F3FD U+200D U+2640 U+FE0F ; 12.0 # 🧎🏽‍♀️ woman kneeling: medium skin tone
U+1F9CE U+1F3FE U+200D U+2640 U+FE0F ; 12.0 # 🧎🏾‍♀️ woman kneeling: medium-dark skin tone
U+1F9CE U+1F3FF U+200D U+2640 U+FE0F ; 12.0 # 🧎🏿‍♀️ woman kneeling: dark skin tone
U+1F468 U+200D U+1F9AF ; 12.0 # 👨‍🦯 man with probing cane
U+1F468 U+1F3FB U+200D U+1F9AF ; 12.0 # 👨🏻‍🦯 man with probing cane: light skin tone
U+1F468 U+1F3FC U+200D U+1F9AF ; 12.0 # 👨🏼‍🦯 man with probing cane: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F9AF ; 12.0 # 👨🏽‍🦯 man with probing cane: medium skin tone
U+1F468 U+1F3FE U+200D U+1F9AF ; 12.0 # 👨🏾‍🦯 man with probing cane: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F9AF ; 12.0 # 👨🏿‍🦯 man with probing cane: dark skin tone
U+1F469 U+200D U+1F9AF ; 12.0 # 👩‍🦯 woman with probing cane
U+1F469 U+1F3FB U+200D U+1F9AF ; 12.0 # 👩🏻‍🦯 woman with probing cane: light skin tone
U+1F469 U+1F3FC U+200D U+1F9AF ; 12.0 # 👩🏼‍🦯 woman with probing cane: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F9AF ; 12.0 # 👩🏽‍🦯 woman with probing cane: medium skin tone
U+1F469 U+1F3FE U+200D U+1F9AF ; 12.0 # 👩🏾‍🦯 woman with probing cane: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F9AF ; 12.0 # 👩🏿‍🦯 woman with probing cane: dark skin tone
U+1F468 U+200D U+1F9BC ; 12.0 # 👨‍🦼 man in motorized wheelchair
U+1F468 U+1F3FB U+200D U+1F9BC ; 12.0 # 👨🏻‍🦼 man in motorized wheelchair: light skin tone
U+1F468 U+1F3FC U+200D U+1F9BC ; 12.0 # 👨🏼‍🦼 man in motorized wheelchair: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F9BC ; 12.0 # 👨🏽‍🦼 man in motorized wheelchair: medium skin tone
U+1F468 U+1F3FE U+200D U+1F9BC ; 12.0 # 👨🏾‍🦼 man in motorized wheelchair: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F9BC ; 12.0 # 👨🏿‍🦼 man in motorized wheelchair: dark skin tone
U+1F469 U+200D U+1F9BC ; 12.0 # 👩‍🦼 woman in motorized wheelchair
U+1F469 U+1F3FB U+200D U+1F9BC ; 12.0 # 👩🏻‍🦼 woman in motorized wheelchair: light skin tone
U+1F469 U+1F3FC U+200D U+1F9BC ; 12.0 # 👩🏼‍🦼 woman in motorized wheelchair: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F9BC ; 12.0 # 👩🏽‍🦼 woman in motorized wheelchair: medium skin tone
U+1F469 U+1F3FE U+200D U+1F9BC ; 12.0 # 👩🏾‍🦼 woman in motorized wheelchair: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F9BC ; 12.0 # 👩🏿‍🦼 woman in motorized wheelchair: dark skin tone
U+1F468 U+200D U+1F9BD ; 12.0 # 👨‍🦽 man in manual wheelchair
U+1F468 U+1F3FB U+200D U+1F9BD ; 12.0 # 👨🏻‍🦽 man in manual wheelchair: light skin tone
U+1F468 U+1F3FC U+200D U+1F9BD ; 12.0 # 👨🏼‍🦽 man in manual wheelchair: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F9BD ; 12.0 # 👨🏽‍🦽 man in manual wheelchair: medium skin tone
U+1F468 U+1F3FE U+200D U+1F9BD ; 12.0 # 👨🏾‍🦽 man in manual wheelchair: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F9BD ; 12.0 # 👨🏿‍🦽 man in manual wheelchair: dark skin tone
U+1F469 U+200D U+1F9BD ; 12.0 # 👩‍🦽 woman in manual wheelchair
U+1F469 U+1F3FB U+200D U+1F9BD ; 12.0 # 👩🏻‍🦽 woman in manual wheelchair: light skin tone
U+1F469 U+1F3FC U+200D U+1F9BD ; 12.0 # 👩🏼‍🦽 woman in manual wheelchair: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F9BD ; 12.0 # 👩🏽‍🦽 woman in manual wheelchair: medium skin tone
U+1F469 U+1F3FE U+200D U+1F9BD ; 12.0 # 👩🏾‍🦽 woman in manual wheelchair: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F9BD ; 12.0 # 👩🏿‍🦽 woman in manual wheelchair: dark skin tone
U+1F3C3 ; 6.0 # 🏃 person running
U+1F3C3 U+1F3FB ; 8.0 # 🏃🏻 person running: light skin tone
U+1F3C3 U+1F3FC ; 8.0 # 🏃🏼 person running: medium-light skin tone
U+1F3C3 U+1F3FD ; 8.0 # 🏃🏽 person running: medium skin tone
U+1F3C3 U+1F3FE ; 8.0 # 🏃🏾 person running: medium-dark skin tone
U+1F3C3 U+1F3FF ; 8.0 # 🏃🏿 person running: dark skin tone
U+1F3C3 U+200D U+2642 U+FE0F ; 6.0 # 🏃‍♂️ man running
U+1F3C3 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🏃🏻‍♂️ man running: light skin tone
U+1F3C3 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🏃🏼‍♂️ man running: medium-light skin tone
U+1F3C3 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🏃🏽‍♂️ man running: medium skin tone
U+1F3C3 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🏃🏾‍♂️ man running: medium-dark skin tone
U+1F3C3 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🏃🏿‍♂️ man running: dark skin tone
U+1F3C3 U+200D U+2640 U+FE0F ; 6.0 # 🏃‍♀️ woman running
U+1F3C3 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🏃🏻‍♀️ woman running: light skin tone
U+1F3C3 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🏃🏼‍♀️ woman running: medium-light skin tone
U+1F3C3 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🏃🏽‍♀️ woman running: medium skin tone
U+1F3C3 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🏃🏾‍♀️ woman running: medium-dark skin tone
U+1F3C3 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🏃🏿‍♀️ woman running: dark skin tone
U+1F483 ; 6.0 # 💃 woman dancing
U+1F483 U+1F3FB ; 8.0 # 💃🏻 woman dancing: light skin tone
U+1F483 U+1F3FC ; 8.0 # 💃🏼 woman dancing: medium-light skin tone
U+1F483 U+1F3FD ; 8.0 # 💃🏽 woman dancing: medium skin tone
U+1F483 U+1F3FE ; 8.0 # 💃🏾 woman dancing: medium-dark skin tone
U+1F483 U+1F3FF ; 8.0 # 💃🏿 woman dancing: dark skin tone
U+1F57A ; 9.0 # 🕺 man dancing
U+1F57A U+1F3FB ; 9.0 # 🕺🏻 man dancing: light skin tone
U+1F57A U+1F3FC ; 9.0 # 🕺🏼 man dancing: medium-light skin tone
U+1F57A U+1F3FD ; 9.0 # 🕺🏽 man dancing: medium skin tone
U+1F57A U+1F3FE ; 9.0 # 🕺🏾 man dancing: medium-dark skin tone
U+1F57A U+1F3FF ; 9.0 # 🕺🏿 man dancing: dark skin tone
U+1F574 ; 7.0 # 🕴 man in suit levitating
U+1F574 U+1F3FB ; 8.0 # 🕴🏻 man in suit levitating: light skin tone
U+1F574 U+1F3FC ; 8.0 # 🕴🏼 man in suit levitating: medium-light skin tone
U+1F574 U+1F3FD ; 8.0 # 🕴🏽 man in suit levitating: medium skin tone
U+1F574 U+1F3FE ; 8.0 # 🕴🏾 man in suit levitating: medium-dark skin tone
U+1F574 U+1F3FF ; 8.0 # 🕴🏿 man in suit levitating: dark skin tone
U+1F46F ; 6.0 # 👯 people with bunny ears
U+1F46F U+200D U+2642 U+FE0F ; 6.0 # 👯‍♂️ men with bunny ears
U+1F46F U+200D U+2640 U+FE0F ; 6.0 # 👯‍♀️ women with bunny ears
U+1F9D6 ; 10.0 # 🧖 person in steamy room
U+1F9D6 U+1F3FB ; 10.0 # 🧖🏻 person in steamy room: light skin tone
U+1F9D6 U+1F3FC ; 10.0 # 🧖🏼 person in steamy room: medium-light skin tone
U+1F9D6 U+1F3FD ; 10.0 # 🧖🏽 person in steamy room: medium skin tone
U+1F9D6 U+1F3FE ; 10.0 # 🧖🏾 person in steamy room: medium-dark skin tone
U+1F9D6 U+1F3FF ; 10.0 # 🧖🏿 person in steamy room: dark skin tone
U+1F9D6 U+200D U+2642 U+FE0F ; 10.0 # 🧖‍♂️ man in steamy room
U+1F9D6 U+1F3FB U+200D U+2642 U+FE0F ; 10.0 # 🧖🏻‍♂️ man in steamy room: light skin tone
U+1F9D6 U+1F3FC U+200D U+2642 U+FE0F ; 10.0 # 🧖🏼‍♂️ man in steamy room: medium-light skin tone
U+1F9D6 U+1F3FD U+200D U+2642 U+FE0F ; 10.0 # 🧖🏽‍♂️ man in steamy room: medium skin tone
U+1F9D6 U+1F3FE U+200D U+2642 U+FE0F ; 10.0 # 🧖🏾‍♂️ man in steamy room: medium-dark skin tone
U+1F9D6 U+1F3FF U+200D U+2642 U+FE0F ; 10.0 # 🧖🏿‍♂️ man in steamy room: dark skin tone
U+1F9D6 U+200D U+2640 U+FE0F ; 10.0 # 🧖‍♀️ woman in steamy room
U+1F9D6 U+1F3FB U+200D U+2640 U+FE0F ; 10.0 # 🧖🏻‍♀️ woman in steamy room: light skin tone
U+1F9D6 U+1F3FC U+200D U+2640 U+FE0F ; 10.0 # 🧖🏼‍♀️ woman in steamy room: medium-light skin tone
U+1F9D6 U+1F3FD U+200D U+2640 U+FE0F ; 10.0 # 🧖🏽‍♀️ woman in steamy room: medium skin tone
U+1F9D6 U+1F3FE U+200D U+2640 U+FE0F ; 10.0 # 🧖🏾‍♀️ woman in steamy room: medium-dark skin tone
U+1F9D6 U+1F3FF U+200D U+2640 U+FE0F ; 10.0 # 🧖🏿‍♀️ woman in steamy room: dark skin tone
U+1F9D7 ; 10.0 # 🧗 person climbing
U+1F9D7 U+1F3FB ; 10.0 # 🧗🏻 person climbing: light skin tone
U+1F9D7 U+1F3FC ; 10.0 # 🧗🏼 person climbing: medium-light skin tone
U+1F9D7 U+1F3FD ; 10.0 # 🧗🏽 person climbing: medium skin tone
U+1F9D7 U+1F3FE ; 10.0 # 🧗🏾 person climbing: medium-dark skin tone
U+1F9D7 U+1F3FF ; 10.0 # 🧗🏿 person climbing: dark skin tone
U+1F9D7 U+200D U+2642 U+FE0F ; 10.0 # 🧗‍♂️ man climbing
U+1F9D7 U+1F3FB U+200D U+2642 U+FE0F ; 10.0 # 🧗🏻‍♂️ man climbing: light skin tone
U+1F9D7 U+1F3FC U+200D U+2642 U+FE0F ; 10.0 # 🧗🏼‍♂️ man climbing: medium-light skin tone
U+1F9D7 U+1F3FD U+200D U+2642 U+FE0F ; 10.0 # 🧗🏽‍♂️ man climbing: medium skin tone
U+1F9D7 U+1F3FE U+200D U+2642 U+FE0F ; 10.0 # 🧗🏾‍♂️ man climbing: medium-dark skin tone
U+1F9D7 U+1F3FF U+200D U+2642 U+FE0F ; 10.0 # 🧗🏿‍♂️ man climbing: dark skin tone
U+1F9D7 U+200D U+2640 U+FE0F ; 10.0 # 🧗‍♀️ woman climbing
U+1F9D7 U+1F3FB U+200D U+2640 U+FE0F ; 10.0 # 🧗🏻‍♀️ woman climbing: light skin tone
U+1F9D7 U+1F3FC U+200D U+2640 U+FE0F ; 10.0 # 🧗🏼‍♀️ woman climbing: medium-light skin tone
U+1F9D7 U+1F3FD U+200D U+2640 U+FE0F ; 10.0 # 🧗🏽‍♀️ woman climbing: medium skin tone
U+1F9D7 U+1F3FE U+200D U+2640 U+FE0F ; 10.0 # 🧗🏾‍♀️ woman climbing: medium-dark skin tone
U+1F9D7 U+1F3FF U+200D U+2640 U+FE0F ; 10.0 # 🧗🏿‍♀️ woman climbing: dark skin tone
U+1F93A ; 9.0 # 🤺 person fencing
U+1F3C7 ; 6.0 # 🏇 horse racing
U+1F3C7 U+1F3FB ; 8.0 # 🏇🏻 horse racing: light skin tone
U+1F3C7 U+1F3FC ; 8.0 # 🏇🏼 horse racing: medium-light skin tone
U+1F3C7 U+1F3FD ; 8.0 # 🏇🏽 horse racing: medium skin tone
U+1F3C7 U+1F3FE ; 8.0 # 🏇🏾 horse racing: medium-dark skin tone
U+1F3C7 U+1F3FF ; 8.0 # 🏇🏿 horse racing: dark skin tone
U+26F7 ; 5.2 # ⛷ skier
U+1F3C2 ; 6.0 # 🏂 snowboarder
U+1F3C2 U+1F3FB ; 8.0 # 🏂🏻 snowboarder: light skin tone
U+1F3C2 U+1F3FC ; 8.0 # 🏂🏼 snowboarder: medium-light skin tone
U+1F3C2 U+1F3FD ; 8.0 # 🏂🏽 snowboarder: medium skin tone
U+1F3C2 U+1F3FE ; 8.0 # 🏂🏾 snowboarder: medium-dark skin tone
U+1F3C2 U+1F3FF ; 8.0 # 🏂🏿 snowboarder: dark skin tone
U+1F3CC ; 7.0 # 🏌 person golfing
U+1F3CC U+1F3FB ; 8.0 # 🏌🏻 person golfing: light skin tone
U+1F3CC U+1F3FC ; 8.0 # 🏌🏼 person golfing: medium-light skin tone
U+1F3CC U+1F3FD ; 8.0 # 🏌🏽 person golfing: medium skin tone
U+1F3CC U+1F3FE ; 8.0 # 🏌🏾 person golfing: medium-dark skin tone
U+1F3CC U+1F3FF ; 8.0 # 🏌🏿 person golfing: dark skin tone
U+1F3CC U+FE0F U+200D U+2642 U+FE0F ; 7.0 # 🏌️‍♂️ man golfing
U+1F3CC U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🏌🏻‍♂️ man golfing: light skin tone
U+1F3CC U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🏌🏼‍♂️ man golfing: medium-light skin tone
U+1F3CC U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🏌🏽‍♂️ man golfing: medium skin tone
U+1F3CC U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🏌🏾‍♂️ man golfing: medium-dark skin tone
U+1F3CC U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🏌🏿‍♂️ man golfing: dark skin tone
U+1F3CC U+FE0F U+200D U+2640 U+FE0F ; 7.0 # 🏌️‍♀️ woman golfing
U+1F3CC U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🏌🏻‍♀️ woman golfing: light skin tone
U+1F3CC U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🏌🏼‍♀️ woman golfing: medium-light skin tone
U+1F3CC U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🏌🏽‍♀️ woman golfing: medium skin tone
U+1F3CC U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🏌🏾‍♀️ woman golfing: medium-dark skin tone
U+1F3CC U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🏌🏿‍♀️ woman golfing: dark skin tone
U+1F3C4 ; 6.0 # 🏄 person surfing
U+1F3C4 U+1F3FB ; 8.0 # 🏄🏻 person surfing: light skin tone
U+1F3C4 U+1F3FC ; 8.0 # 🏄🏼 person surfing: medium-light skin tone
U+1F3C4 U+1F3FD ; 8.0 # 🏄🏽 person surfing: medium skin tone
U+1F3C4 U+1F3FE ; 8.0 # 🏄🏾 person surfing: medium-dark skin tone
U+1F3C4 U+1F3FF ; 8.0 # 🏄🏿 person surfing: dark skin tone
U+1F3C4 U+200D U+2642 U+FE0F ; 6.0 # 🏄‍♂️ man surfing
U+1F3C4 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🏄🏻‍♂️ man surfing: light skin tone
U+1F3C4 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🏄🏼‍♂️ man surfing: medium-light skin tone
U+1F3C4 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🏄🏽‍♂️ man surfing: medium skin tone
U+1F3C4 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🏄🏾‍♂️ man surfing: medium-dark skin tone
U+1F3C4 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🏄🏿‍♂️ man surfing: dark skin tone
U+1F3C4 U+200D U+2640 U+FE0F ; 6.0 # 🏄‍♀️ woman surfing
U+1F3C4 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🏄🏻‍♀️ woman surfing: light skin tone
U+1F3C4 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🏄🏼‍♀️ woman surfing: medium-light skin tone
U+1F3C4 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🏄🏽‍♀️ woman surfing: medium skin tone
U+1F3C4 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🏄🏾‍♀️ woman surfing: medium-dark skin tone
U+1F3C4 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🏄🏿‍♀️ woman surfing: dark skin tone
U+1F6A3 ; 6.0 # 🚣 person rowing boat
U+1F6A3 U+1F3FB ; 8.0 # 🚣🏻 person rowing boat: light skin tone
U+1F6A3 U+1F3FC ; 8.0 # 🚣🏼 person rowing boat: medium-light skin tone
U+1F6A3 U+1F3FD ; 8.0 # 🚣🏽 person rowing boat: medium skin tone
U+1F6A3 U+1F3FE ; 8.0 # 🚣🏾 person rowing boat: medium-dark skin tone
U+1F6A3 U+1F3FF ; 8.0 # 🚣🏿 person rowing boat: dark skin tone
U+1F6A3 U+200D U+2642 U+FE0F ; 6.0 # 🚣‍♂️ man rowing boat
U+1F6A3 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🚣🏻‍♂️ man rowing boat: light skin tone
U+1F6A3 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🚣🏼‍♂️ man rowing boat: medium-light skin tone
U+1F6A3 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🚣🏽‍♂️ man rowing boat: medium skin tone
U+1F6A3 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🚣🏾‍♂️ man rowing boat: medium-dark skin tone
U+1F6A3 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🚣🏿‍♂️ man rowing boat: dark skin tone
U+1F6A3 U+200D U+2640 U+FE0F ; 6.0 # 🚣‍♀️ woman rowing boat
U+1F6A3 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🚣🏻‍♀️ woman rowing boat: light skin tone
U+1F6A3 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🚣🏼‍♀️ woman rowing boat: medium-light skin tone
U+1F6A3 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🚣🏽‍♀️ woman rowing boat: medium skin tone
U+1F6A3 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🚣🏾‍♀️ woman rowing boat: medium-dark skin tone
U+1F6A3 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🚣🏿‍♀️ woman rowing boat: dark skin tone
U+1F3CA ; 6.0 # 🏊 person swimming
U+1F3CA U+1F3FB ; 8.0 # 🏊🏻 person swimming: light skin tone
U+1F3CA U+1F3FC ; 8.0 # 🏊🏼 person swimming: medium-light skin tone
U+1F3CA U+1F3FD ; 8.0 # 🏊🏽 person swimming: medium skin tone
U+1F3CA U+1F3FE ; 8.0 # 🏊🏾 person swimming: medium-dark skin tone
U+1F3CA U+1F3FF ; 8.0 # 🏊🏿 person swimming: dark skin tone
U+1F3CA U+200D U+2642 U+FE0F ; 6.0 # 🏊‍♂️ man swimming
U+1F3CA U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🏊🏻‍♂️ man swimming: light skin tone
U+1F3CA U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🏊🏼‍♂️ man swimming: medium-light skin tone
U+1F3CA U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🏊🏽‍♂️ man swimming: medium skin tone
U+1F3CA U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🏊🏾‍♂️ man swimming: medium-dark skin tone
U+1F3CA U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🏊🏿‍♂️ man swimming: dark skin tone
U+1F3CA U+200D U+2640 U+FE0F ; 6.0 # 🏊‍♀️ woman swimming
U+1F3CA U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🏊🏻‍♀️ woman swimming: light skin tone
U+1F3CA U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🏊🏼‍♀️ woman swimming: medium-light skin tone
U+1F3CA U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🏊🏽‍♀️ woman swimming: medium skin tone
U+1F3CA U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🏊🏾‍♀️ woman swimming: medium-dark skin tone
U+1F3CA U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🏊🏿‍♀️ woman swimming: dark skin tone
U+26F9 ; 5.2 # ⛹ person bouncing ball
U+26F9 U+1F3FB ; 8.0 # ⛹🏻 person bouncing ball: light skin tone
U+26F9 U+1F3FC ; 8.0 # ⛹🏼 person bouncing ball: medium-light skin tone
U+26F9 U+1F3FD ; 8.0 # ⛹🏽 person bouncing ball: medium skin tone
U+26F9 U+1F3FE ; 8.0 # ⛹🏾 person bouncing ball: medium-dark skin tone
U+26F9 U+1F3FF ; 8.0 # ⛹🏿 person bouncing ball: dark skin tone
U+26F9 U+FE0F U+200D U+2642 U+FE0F ; 5.2 # ⛹️‍♂️ man bouncing ball
U+26F9 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # ⛹🏻‍♂️ man bouncing ball: light skin tone
U+26F9 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # ⛹🏼‍♂️ man bouncing ball: medium-light skin tone
U+26F9 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # ⛹🏽‍♂️ man bouncing ball: medium skin tone
U+26F9 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # ⛹🏾‍♂️ man bouncing ball: medium-dark skin tone
U+26F9 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # ⛹🏿‍♂️ man bouncing ball: dark skin tone
U+26F9 U+FE0F U+200D U+2640 U+FE0F ; 5.2 # ⛹️‍♀️ woman bouncing ball
U+26F9 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # ⛹🏻‍♀️ woman bouncing ball: light skin tone
U+26F9 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # ⛹🏼‍♀️ woman bouncing ball: medium-light skin tone
U+26F9 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # ⛹🏽‍♀️ woman bouncing ball: medium skin tone
U+26F9 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # ⛹🏾‍♀️ woman bouncing ball: medium-dark skin tone
U+26F9 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # ⛹🏿‍♀️ woman bouncing ball: dark skin tone
U+1F3CB ; 7.0 # 🏋 person lifting weights
U+1F3CB U+1F3FB ; 8.0 # 🏋🏻 person lifting weights: light skin tone
U+1F3CB U+1F3FC ; 8.0 # 🏋🏼 person lifting weights: medium-light skin tone
U+1F3CB U+1F3FD ; 8.0 # 🏋🏽 person lifting weights: medium skin tone
U+1F3CB U+1F3FE ; 8.0 # 🏋🏾 person lifting weights: medium-dark skin tone
U+1F3CB U+1F3FF ; 8.0 # 🏋🏿 person lifting weights: dark skin tone
U+1F3CB U+FE0F U+200D U+2642 U+FE0F ; 7.0 # 🏋️‍♂️ man lifting weights
U+1F3CB U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🏋🏻‍♂️ man lifting weights: light skin tone
U+1F3CB U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🏋🏼‍♂️ man lifting weights: medium-light skin tone
U+1F3CB U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🏋🏽‍♂️ man lifting weights: medium skin tone
U+1F3CB U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🏋🏾‍♂️ man lifting weights: medium-dark skin tone
U+1F3CB U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🏋🏿‍♂️ man lifting weights: dark skin tone
U+1F3CB U+FE0F U+200D U+2640 U+FE0F ; 7.0 # 🏋️‍♀️ woman lifting weights
U+1F3CB U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🏋🏻‍♀️ woman lifting weights: light skin tone
U+1F3CB U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🏋🏼‍♀️ woman lifting weights: medium-light skin tone
U+1F3CB U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🏋🏽‍♀️ woman lifting weights: medium skin tone
U+1F3CB U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🏋🏾‍♀️ woman lifting weights: medium-dark skin tone
U+1F3CB U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🏋🏿‍♀️ woman lifting weights: dark skin tone
U+1F6B4 ; 6.0 # 🚴 person biking
U+1F6B4 U+1F3FB ; 8.0 # 🚴🏻 person biking: light skin tone
U+1F6B4 U+1F3FC ; 8.0 # 🚴🏼 person biking: medium-light skin tone
U+1F6B4 U+1F3FD ; 8.0 # 🚴🏽 person biking: medium skin tone
U+1F6B4 U+1F3FE ; 8.0 # 🚴🏾 person biking: medium-dark skin tone
U+1F6B4 U+1F3FF ; 8.0 # 🚴🏿 person biking: dark skin tone
U+1F6B4 U+200D U+2642 U+FE0F ; 6.0 # 🚴‍♂️ man biking
U+1F6B4 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🚴🏻‍♂️ man biking: light skin tone
U+1F6B4 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🚴🏼‍♂️ man biking: medium-light skin tone
U+1F6B4 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🚴🏽‍♂️ man biking: medium skin tone
U+1F6B4 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🚴🏾‍♂️ man biking: medium-dark skin tone
U+1F6B4 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🚴🏿‍♂️ man biking: dark skin tone
U+1F6B4 U+200D U+2640 U+FE0F ; 6.0 # 🚴‍♀️ woman biking
U+1F6B4 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🚴🏻‍♀️ woman biking: light skin tone
U+1F6B4 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🚴🏼‍♀️ woman biking: medium-light skin tone
U+1F6B4 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🚴🏽‍♀️ woman biking: medium skin tone
U+1F6B4 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🚴🏾‍♀️ woman biking: medium-dark skin tone
U+1F6B4 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🚴🏿‍♀️ woman biking: dark skin tone
U+1F6B5 ; 6.0 # 🚵 person mountain biking
U+1F6B5 U+1F3FB ; 8.0 # 🚵🏻 person mountain biking: light skin tone
U+1F6B5 U+1F3FC ; 8.0 # 🚵🏼 person mountain biking: medium-light skin tone
U+1F6B5 U+1F3FD ; 8.0 # 🚵🏽 person mountain biking: medium skin tone
U+1F6B5 U+1F3FE ; 8.0 # 🚵🏾 person mountain biking: medium-dark skin tone
U+1F6B5 U+1F3FF ; 8.0 # 🚵🏿 person mountain biking: dark skin tone
U+1F6B5 U+200D U+2642 U+FE0F ; 6.0 # 🚵‍♂️ man mountain biking
U+1F6B5 U+1F3FB U+200D U+2642 U+FE0F ; 8.0 # 🚵🏻‍♂️ man mountain biking: light skin tone
U+1F6B5 U+1F3FC U+200D U+2642 U+FE0F ; 8.0 # 🚵🏼‍♂️ man mountain biking: medium-light skin tone
U+1F6B5 U+1F3FD U+200D U+2642 U+FE0F ; 8.0 # 🚵🏽‍♂️ man mountain biking: medium skin tone
U+1F6B5 U+1F3FE U+200D U+2642 U+FE0F ; 8.0 # 🚵🏾‍♂️ man mountain biking: medium-dark skin tone
U+1F6B5 U+1F3FF U+200D U+2642 U+FE0F ; 8.0 # 🚵🏿‍♂️ man mountain biking: dark skin tone
U+1F6B5 U+200D U+2640 U+FE0F ; 6.0 # 🚵‍♀️ woman mountain biking
U+1F6B5 U+1F3FB U+200D U+2640 U+FE0F ; 8.0 # 🚵🏻‍♀️ woman mountain biking: light skin tone
U+1F6B5 U+1F3FC U+200D U+2640 U+FE0F ; 8.0 # 🚵🏼‍♀️ woman mountain biking: medium-light skin tone
U+1F6B5 U+1F3FD U+200D U+2640 U+FE0F ; 8.0 # 🚵🏽‍♀️ woman mountain biking: medium skin tone
U+1F6B5 U+1F3FE U+200D U+2640 U+FE0F ; 8.0 # 🚵🏾‍♀️ woman mountain biking: medium-dark skin tone
U+1F6B5 U+1F3FF U+200D U+2640 U+FE0F ; 8.0 # 🚵🏿‍♀️ woman mountain biking: dark skin tone
U+1F938 ; 9.0 # 🤸 person cartwheeling
U+1F938 U+1F3FB ; 9.0 # 🤸🏻 person cartwheeling: light skin tone
U+1F938 U+1F3FC ; 9.0 # 🤸🏼 person cartwheeling: medium-light skin tone
U+1F938 U+1F3FD ; 9.0 # 🤸🏽 person cartwheeling: medium skin tone
U+1F938 U+1F3FE ; 9.0 # 🤸🏾 person cartwheeling: medium-dark skin tone
U+1F938 U+1F3FF ; 9.0 # 🤸🏿 person cartwheeling: dark skin tone
U+1F938 U+200D U+2642 U+FE0F ; 9.0 # 🤸‍♂️ man cartwheeling
U+1F938 U+1F3FB U+200D U+2642 U+FE0F ; 9.0 # 🤸🏻‍♂️ man cartwheeling: light skin tone
U+1F938 U+1F3FC U+200D U+2642 U+FE0F ; 9.0 # 🤸🏼‍♂️ man cartwheeling: medium-light skin tone
U+1F938 U+1F3FD U+200D U+2642 U+FE0F ; 9.0 # 🤸🏽‍♂️ man cartwheeling: medium skin tone
U+1F938 U+1F3FE U+200D U+2642 U+FE0F ; 9.0 # 🤸🏾‍♂️ man cartwheeling: medium-dark skin tone
U+1F938 U+1F3FF U+200D U+2642 U+FE0F ; 9.0 # 🤸🏿‍♂️ man cartwheeling: dark skin tone
U+1F938 U+200D U+2640 U+FE0F ; 9.0 # 🤸‍♀️ woman cartwheeling
U+1F938 U+1F3FB U+200D U+2640 U+FE0F ; 9.0 # 🤸🏻‍♀️ woman cartwheeling: light skin tone
U+1F938 U+1F3FC U+200D U+2640 U+FE0F ; 9.0 # 🤸🏼‍♀️ woman cartwheeling: medium-light skin tone
U+1F938 U+1F3FD U+200D U+2640 U+FE0F ; 9.0 # 🤸🏽‍♀️ woman cartwheeling: medium skin tone
U+1F938 U+1F3FE U+200D U+2640 U+FE0F ; 9.0 # 🤸🏾‍♀️ woman cartwheeling: medium-dark skin tone
U+1F938 U+1F3FF U+200D U+2640 U+FE0F ; 9.0 # 🤸🏿‍♀️ woman cartwheeling: dark skin tone
U+1F93C ; 9.0 # 🤼 people wrestling
U+1F93C U+200D U+2642 U+FE0F ; 9.0 # 🤼‍♂️ men wrestling
U+1F93C U+200D U+2640 U+FE0F ; 9.0 # 🤼‍♀️ women wrestling
U+1F93D ; 9.0 # 🤽 person playing water polo
U+1F93D U+1F3FB ; 9.0 # 🤽🏻 person playing water polo: light skin tone
U+1F93D U+1F3FC ; 9.0 # 🤽🏼 person playing water polo: medium-light skin tone
U+1F93D U+1F3FD ; 9.0 # 🤽🏽 person playing water polo: medium skin tone
U+1F93D U+1F3FE ; 9.0 # 🤽🏾 person playing water polo: medium-dark skin tone
U+1F93D U+1F3FF ; 9.0 # 🤽🏿 person playing water polo: dark skin tone
U+1F93D U+200D U+2642 U+FE0F ; 9.0 # 🤽‍♂️ man playing water polo
U+1F93D U+1F3FB U+200D U+2642 U+FE0F ; 9.0 # 🤽🏻‍♂️ man playing water polo: light skin tone
U+1F93D U+1F3FC U+200D U+2642 U+FE0F ; 9.0 # 🤽🏼‍♂️ man playing water polo: medium-light skin tone
U+1F93D U+1F3FD U+200D U+2642 U+FE0F ; 9.0 # 🤽🏽‍♂️ man playing water polo: medium skin tone
U+1F93D U+1F3FE U+200D U+2642 U+FE0F ; 9.0 # 🤽🏾‍♂️ man playing water polo: medium-dark skin tone
U+1F93D U+1F3FF U+200D U+2642 U+FE0F ; 9.0 # 🤽🏿‍♂️ man playing water polo: dark skin tone
U+1F93D U+200D U+2640 U+FE0F ; 9.0 # 🤽‍♀️ woman playing water polo
U+1F93D U+1F3FB U+200D U+2640 U+FE0F ; 9.0 # 🤽🏻‍♀️ woman playing water polo: light skin tone
U+1F93D U+1F3FC U+200D U+2640 U+FE0F ; 9.0 # 🤽🏼‍♀️ woman playing water polo: medium-light skin tone
U+1F93D U+1F3FD U+200D U+2640 U+FE0F ; 9.0 # 🤽🏽‍♀️ woman playing water polo: medium skin tone
U+1F93D U+1F3FE U+200D U+2640 U+FE0F ; 9.0 # 🤽🏾‍♀️ woman playing water polo: medium-dark skin tone
U+1F93D U+1F3FF U+200D U+2640 U+FE0F ; 9.0 # 🤽🏿‍♀️ woman playing water polo: dark skin tone
U+1F93E ; 9.0 # 🤾 person playing handball
U+1F93E U+1F3FB ; 9.0 # 🤾🏻 person playing handball: light skin tone
U+1F93E U+1F3FC ; 9.0 # 🤾🏼 person playing handball: medium-light skin tone
U+1F93E U+1F3FD ; 9.0 # 🤾🏽 person playing handball: medium skin tone
U+1F93E U+1F3FE ; 9.0 # 🤾🏾 person playing handball: medium-dark skin tone
U+1F93E U+1F3FF ; 9.0 # 🤾🏿 person playing handball: dark skin tone
U+1F93E U+200D U+2642 U+FE0F ; 9.0 # 🤾‍♂️ man playing handball
U+1F93E U+1F3FB U+200D U+2642 U+FE0F ; 9.0 # 🤾🏻‍♂️ man playing handball: light skin tone
U+1F93E U+1F3FC U+200D U+2642 U+FE0F ; 9.0 # 🤾🏼‍♂️ man playing handball: medium-light skin tone
U+1F93E U+1F3FD U+200D U+2642 U+FE0F ; 9.0 # 🤾🏽‍♂️ man playing handball: medium skin tone
U+1F93E U+1F3FE U+200D U+2642 U+FE0F ; 9.0 # 🤾🏾‍♂️ man playing handball: medium-dark skin tone
U+1F93E U+1F3FF U+200D U+2642 U+FE0F ; 9.0 # 🤾🏿‍♂️ man playing handball: dark skin tone
U+1F93E U+200D U+2640 U+FE0F ; 9.0 # 🤾‍♀️ woman playing handball
U+1F93E U+1F3FB U+200D U+2640 U+FE0F ; 9.0 # 🤾🏻‍♀️ woman playing handball: light skin tone
U+1F93E U+1F3FC U+200D U+2640 U+FE0F ; 9.0 # 🤾🏼‍♀️ woman playing handball: medium-light skin tone
U+1F93E U+1F3FD U+200D U+2640 U+FE0F ; 9.0 # 🤾🏽‍♀️ woman playing handball: medium skin tone
U+1F93E U+1F3FE U+200D U+2640 U+FE0F ; 9.0 # 🤾🏾‍♀️ woman playing handball: medium-dark skin tone
U+1F93E U+1F3FF U+200D U+2640 U+FE0F ; 9.0 # 🤾🏿‍♀️ woman playing handball: dark skin tone
U+1F939 ; 9.0 # 🤹 person juggling
U+1F939 U+1F3FB ; 9.0 # 🤹🏻 person juggling: light skin tone
U+1F939 U+1F3FC ; 9.0 # 🤹🏼 person juggling: medium-light skin tone
U+1F939 U+1F3FD ; 9.0 # 🤹🏽 person juggling: medium skin tone
U+1F939 U+1F3FE ; 9.0 # 🤹🏾 person juggling: medium-dark skin tone
U+1F939 U+1F3FF ; 9.0 # 🤹🏿 person juggling: dark skin tone
U+1F939 U+200D U+2642 U+FE0F ; 9.0 # 🤹‍♂️ man juggling
U+1F939 U+1F3FB U+200D U+2642 U+FE0F ; 9.0 # 🤹🏻‍♂️ man juggling: light skin tone
U+1F939 U+1F3FC U+200D U+2642 U+FE0F ; 9.0 # 🤹🏼‍♂️ man juggling: medium-light skin tone
U+1F939 U+1F3FD U+200D U+2642 U+FE0F ; 9.0 # 🤹🏽‍♂️ man juggling: medium skin tone
U+1F939 U+1F3FE U+200D U+2642 U+FE0F ; 9.0 # 🤹🏾‍♂️ man juggling: medium-dark skin tone
U+1F939 U+1F3FF U+200D U+2642 U+FE0F ; 9.0 # 🤹🏿‍♂️ man juggling: dark skin tone
U+1F939 U+200D U+2640 U+FE0F ; 9.0 # 🤹‍♀️ woman juggling
U+1F939 U+1F3FB U+200D U+2640 U+FE0F ; 9.0 # 🤹🏻‍♀️ woman juggling: light skin tone
U+1F939 U+1F3FC U+200D U+2640 U+FE0F ; 9.0 # 🤹🏼‍♀️ woman juggling: medium-light skin tone
U+1F939 U+1F3FD U+200D U+2640 U+FE0F ; 9.0 # 🤹🏽‍♀️ woman juggling: medium skin tone
U+1F939 U+1F3FE U+200D U+2640 U+FE0F ; 9.0 # 🤹🏾‍♀️ woman juggling: medium-dark skin tone
U+1F939 U+1F3FF U+200D U+2640 U+FE0F ; 9.0 # 🤹🏿‍♀️ woman juggling: dark skin tone
U+1F9D8 ; 10.0 # 🧘 person in lotus position
U+1F9D8 U+1F3FB ; 10.0 # 🧘🏻 person in lotus position: light skin tone
U+1F9D8 U+1F3FC ; 10.0 # 🧘🏼 person in lotus position: medium-light skin tone
U+1F9D8 U+1F3FD ; 10.0 # 🧘🏽 person in lotus position: medium skin tone
U+1F9D8 U+1F3FE ; 10.0 # 🧘🏾 person in lotus position: medium-dark skin tone
U+1F9D8 U+1F3FF ; 10.0 # 🧘🏿 person in lotus position: dark skin tone
U+1F9D8 U+200D U+2642 U+FE0F ; 10.0 # 🧘‍♂️ man in lotus position
U+1F9D8 U+1F3FB U+200D U+2642 U+FE0F ; 10.0 # 🧘🏻‍♂️ man in lotus position: light skin tone
U+1F9D8 U+1F3FC U+200D U+2642 U+FE0F ; 10.0 # 🧘🏼‍♂️ man in lotus position: medium-light skin tone
U+1F9D8 U+1F3FD U+200D U+2642 U+FE0F ; 10.0 # 🧘🏽‍♂️ man in lotus position: medium skin tone
U+1F9D8 U+1F3FE U+200D U+2642 U+FE0F ; 10.0 # 🧘🏾‍♂️ man in lotus position: medium-dark skin tone
U+1F9D8 U+1F3FF U+200D U+2642 U+FE0F ; 10.0 # 🧘🏿‍♂️ man in lotus position: dark skin tone
U+1F9D8 U+200D U+2640 U+FE0F ; 10.0 # 🧘‍♀️ woman in lotus position
U+1F9D8 U+1F3FB U+200D U+2640 U+FE0F ; 10.0 # 🧘🏻‍♀️ woman in lotus position: light skin tone
U+1F9D8 U+1F3FC U+200D U+2640 U+FE0F ; 10.0 # 🧘🏼‍♀️ woman in lotus position: medium-light skin tone
U+1F9D8 U+1F3FD U+200D U+2640 U+FE0F ; 10.0 # 🧘🏽‍♀️ woman in lotus position: medium skin tone
U+1F9D8 U+1F3FE U+200D U+2640 U+FE0F ; 10.0 # 🧘🏾‍♀️ woman in lotus position: medium-dark skin tone
U+1F9D8 U+1F3FF U+200D U+2640 U+FE0F ; 10.0 # 🧘🏿‍♀️ woman in lotus position: dark skin tone
U+1F6C0 ; 6.0 # 🛀 person taking bath
U+1F6C0 U+1F3FB ; 8.0 # 🛀🏻 person taking bath: light skin tone
U+1F6C0 U+1F3FC ; 8.0 # 🛀🏼 person taking bath: medium-light skin tone
U+1F6C0 U+1F3FD ; 8.0 # 🛀🏽 person taking bath: medium skin tone
U+1F6C0 U+1F3FE ; 8.0 # 🛀🏾 person taking bath: medium-dark skin tone
U+1F6C0 U+1F3FF ; 8.0 # 🛀🏿 person taking bath: dark skin tone
U+1F6CC ; 7.0 # 🛌 person in bed
U+1F6CC U+1F3FB ; 8.0 # 🛌🏻 person in bed: light skin tone
U+1F6CC U+1F3FC ; 8.0 # 🛌🏼 person in bed: medium-light skin tone
U+1F6CC U+1F3FD ; 8.0 # 🛌🏽 person in bed: medium skin tone
U+1F6CC U+1F3FE ; 8.0 # 🛌🏾 person in bed: medium-dark skin tone
U+1F6CC U+1F3FF ; 8.0 # 🛌🏿 person in bed: dark skin tone
U+1F9D1 U+200D U+1F91D U+200D U+1F9D1 ; 10.0 # 🧑‍🤝‍🧑 people holding hands
U+1F9D1 U+1F3FB U+200D U+1F91D U+200D U+1F9D1 U+1F3FB ; 10.0 # 🧑🏻‍🤝‍🧑🏻 people holding hands: light skin tone
U+1F9D1 U+1F3FC U+200D U+1F91D U+200D U+1F9D1 U+1F3FB ; 10.0 # 🧑🏼‍🤝‍🧑🏻 people holding hands: medium-light skin tone, light skin tone
U+1F9D1 U+1F3FC U+200D U+1F91D U+200D U+1F9D1 U+1F3FC ; 10.0 # 🧑🏼‍🤝‍🧑🏼 people holding hands: medium-light skin tone
U+1F9D1 U+1F3FD U+200D U+1F91D U+200D U+1F9D1 U+1F3FB ; 10.0 # 🧑🏽‍🤝‍🧑🏻 people holding hands: medium skin tone, light skin tone
U+1F9D1 U+1F3FD U+200D U+1F91D U+200D U+1F9D1 U+1F3FC ; 10.0 # 🧑🏽‍🤝‍🧑🏼 people holding hands: medium skin tone, medium-light skin tone
U+1F9D1 U+1F3FD U+200D U+1F91D U+200D U+1F9D1 U+1F3FD ; 10.0 # 🧑🏽‍🤝‍🧑🏽 people holding hands: medium skin tone
U+1F9D1 U+1F3FE U+200D U+1F91D U+200D U+1F9D1 U+1F3FB ; 10.0 # 🧑🏾‍🤝‍🧑🏻 people holding hands: medium-dark skin tone, light skin tone
U+1F9D1 U+1F3FE U+200D U+1F91D U+200D U+1F9D1 U+1F3FC ; 10.0 # 🧑🏾‍🤝‍🧑🏼 people holding hands: medium-dark skin tone, medium-light skin tone
U+1F9D1 U+1F3FE U+200D U+1F91D U+200D U+1F9D1 U+1F3FD ; 10.0 # 🧑🏾‍🤝‍🧑🏽 people holding hands: medium-dark skin tone, medium skin tone
U+1F9D1 U+1F3FE U+200D U+1F91D U+200D U+1F9D1 U+1F3FE ; 10.0 # 🧑🏾‍🤝‍🧑🏾 people holding hands: medium-dark skin tone
U+1F9D1 U+1F3FF U+200D U+1F91D U+200D U+1F9D1 U+1F3FB ; 10.0 # 🧑🏿‍🤝‍🧑🏻 people holding hands: dark skin tone, light skin tone
U+1F9D1 U+1F3FF U+200D U+1F91D U+200D U+1F9D1 U+1F3FC ; 10.0 # 🧑🏿‍🤝‍🧑🏼 people holding hands: dark skin tone, medium-light skin tone
U+1F9D1 U+1F3FF U+200D U+1F91D U+200D U+1F9D1 U+1F3FD ; 10.0 # 🧑🏿‍🤝‍🧑🏽 people holding hands: dark skin tone, medium skin tone
U+1F9D1 U+1F3FF U+200D U+1F91D U+200D U+1F9D1 U+1F3FE ; 10.0 # 🧑🏿‍🤝‍🧑🏾 people holding hands: dark skin tone, medium-dark skin tone
U+1F9D1 U+1F3FF U+200D U+1F91D U+200D U+1F9D1 U+1F3FF ; 10.0 # 🧑🏿‍🤝‍🧑🏿 people holding hands: dark skin tone
U+1F46D ; 6.0 # 👭 women holding hands
U+1F46D U+1F3FB ; 8.0 # 👭🏻 women holding hands: light skin tone
U+1F469 U+1F3FC U+200D U+1F91D U+200D U+1F469 U+1F3FB ; 9.0 # 👩🏼‍🤝‍👩🏻 women holding hands: medium-light skin tone, light skin tone
U+1F46D U+1F3FC ; 8.0 # 👭🏼 women holding hands: medium-light skin tone
U+1F469 U+1F3FD U+200D U+1F91D U+200D U+1F469 U+1F3FB ; 9.0 # 👩🏽‍🤝‍👩🏻 women holding hands: medium skin tone, light skin tone
U+1F469 U+1F3FD U+200D U+1F91D U+200D U+1F469 U+1F3FC ; 9.0 # 👩🏽‍🤝‍👩🏼 women holding hands: medium skin tone, medium-light skin tone
U+1F46D U+1F3FD ; 8.0 # 👭🏽 women holding hands: medium skin tone
U+1F469 U+1F3FE U+200D U+1F91D U+200D U+1F469 U+1F3FB ; 9.0 # 👩🏾‍🤝‍👩🏻 women holding hands: medium-dark skin tone, light skin tone
U+1F469 U+1F3FE U+200D U+1F91D U+200D U+1F469 U+1F3FC ; 9.0 # 👩🏾‍🤝‍👩🏼 women holding hands: medium-dark skin tone, medium-light skin tone
U+1F469 U+1F3FE U+200D U+1F91D U+200D U+1F469 U+1F3FD ; 9.0 # 👩🏾‍🤝‍👩🏽 women holding hands: medium-dark skin tone, medium skin tone
U+1F46D U+1F3FE ; 8.0 # 👭🏾 women holding hands: medium-dark skin tone
U+1F469 U+1F3FF U+200D U+1F91D U+200D U+1F469 U+1F3FB ; 9.0 # 👩🏿‍🤝‍👩🏻 women holding hands: dark skin tone, light skin tone
U+1F469 U+1F3FF U+200D U+1F91D U+200D U+1F469 U+1F3FC ; 9.0 # 👩🏿‍🤝‍👩🏼 women holding hands: dark skin tone, medium-light skin tone
U+1F469 U+1F3FF U+200D U+1F91D U+200D U+1F469 U+1F3FD ; 9.0 # 👩🏿‍🤝‍👩🏽 women holding hands: dark skin tone, medium skin tone
U+1F469 U+1F3FF U+200D U+1F91D U+200D U+1F469 U+1F3FE ; 9.0 # 👩🏿‍🤝‍👩🏾 women holding hands: dark skin tone, medium-dark skin tone
U+1F46D U+1F3FF ; 8.0 # 👭🏿 women holding hands: dark skin tone
U+1F46B ; 6.0 # 👫 woman and man holding hands
U+1F46B U+1F3FB ; 8.0 # 👫🏻 woman and man holding hands: light skin tone
U+1F469 U+1F3FB U+200D U+1F91D U+200D U+1F468 U+1F3FC ; 9.0 # 👩🏻‍🤝‍👨🏼 woman and man holding hands: light skin tone, medium-light skin tone
U+1F469 U+1F3FB U+200D U+1F91D U+200D U+1F468 U+1F3FD ; 9.0 # 👩🏻‍🤝‍👨🏽 woman and man holding hands: light skin tone, medium skin tone
U+1F469 U+1F3FB U+200D U+1F91D U+200D U+1F468 U+1F3FE ; 9.0 # 👩🏻‍🤝‍👨🏾 woman and man holding hands: light skin tone, medium-dark skin tone
U+1F469 U+1F3FB U+200D U+1F91D U+200D U+1F468 U+1F3FF ; 9.0 # 👩🏻‍🤝‍👨🏿 woman and man holding hands: light skin tone, dark skin tone
U+1F469 U+1F3FC U+200D U+1F91D U+200D U+1F468 U+1F3FB ; 9.0 # 👩🏼‍🤝‍👨🏻 woman and man holding hands: medium-light skin tone, light skin tone
U+1F46B U+1F3FC ; 8.0 # 👫🏼 woman and man holding hands: medium-light skin tone
U+1F469 U+1F3FC U+200D U+1F91D U+200D U+1F468 U+1F3FD ; 9.0 # 👩🏼‍🤝‍👨🏽 woman and man holding hands: medium-light skin tone, medium skin tone
U+1F469 U+1F3FC U+200D U+1F91D U+200D U+1F468 U+1F3FE ; 9.0 # 👩🏼‍🤝‍👨🏾 woman and man holding hands: medium-light skin tone, medium-dark skin tone
U+1F469 U+1F3FC U+200D U+1F91D U+200D U+1F468 U+1F3FF ; 9.0 # 👩🏼‍🤝‍👨🏿 woman and man holding hands: medium-light skin tone, dark skin tone
U+1F469 U+1F3FD U+200D U+1F91D U+200D U+1F468 U+1F3FB ; 9.0 # 👩🏽‍🤝‍👨🏻 woman and man holding hands: medium skin tone, light skin tone
U+1F469 U+1F3FD U+200D U+1F91D U+200D U+1F468 U+1F3FC ; 9.0 # 👩🏽‍🤝‍👨🏼 woman and man holding hands: medium skin tone, medium-light skin tone
U+1F46B U+1F3FD ; 8.0 # 👫🏽 woman and man holding hands: medium skin tone
U+1F469 U+1F3FD U+200D U+1F91D U+200D U+1F468 U+1F3FE ; 9.0 # 👩🏽‍🤝‍👨🏾 woman and man holding hands: medium skin tone, medium-dark skin tone
U+1F469 U+1F3FD U+200D U+1F91D U+200D U+1F468 U+1F3FF ; 9.0 # 👩🏽‍🤝‍👨🏿 woman and man holding hands: medium skin tone, dark skin tone
U+1F469 U+1F3FE U+200D U+1F91D U+200D U+1F468 U+1F3FB ; 9.0 # 👩🏾‍🤝‍👨🏻 woman and man holding hands: medium-dark skin tone, light skin tone
U+1F469 U+1F3FE U+200D U+1F91D U+200D U+1F468 U+1F3FC ; 9.0 # 👩🏾‍🤝‍👨🏼 woman and man holding hands: medium-dark skin tone, medium-light skin tone
U+1F469 U+1F3FE U+200D U+1F91D U+200D U+1F468 U+1F3FD ; 9.0 # 👩🏾‍🤝‍👨🏽 woman and man holding hands: medium-dark skin tone, medium skin tone
U+1F46B U+1F3FE ; 8.0 # 👫🏾 woman and man holding hands: medium-dark skin tone
U+1F469 U+1F3FE U+200D U+1F91D U+200D U+1F468 U+1F3FF ; 9.0 # 👩🏾‍🤝‍👨🏿 woman and man holding hands: medium-dark skin tone, dark skin tone
U+1F469 U+1F3FF U+200D U+1F91D U+200D U+1F468 U+1F3FB ; 9.0 # 👩🏿‍🤝‍👨🏻 woman and man holding hands: dark skin tone, light skin tone
U+1F469 U+1F3FF U+200D U+1F91D U+200D U+1F468 U+1F3FC ; 9.0 # 👩🏿‍🤝‍👨🏼 woman and man holding hands: dark skin tone, medium-light skin tone
U+1F469 U+1F3FF U+200D U+1F91D U+200D U+1F468 U+1F3FD ; 9.0 # 👩🏿‍🤝‍👨🏽 woman and man holding hands: dark skin tone, medium skin tone
U+1F469 U+1F3FF U+200D U+1F91D U+200D U+1F468 U+1F3FE ; 9.0 # 👩🏿‍🤝‍👨🏾 woman and man holding hands: dark skin tone, medium-dark skin tone
U+1F46B U+1F3FF ; 8.0 # 👫🏿 woman and man holding hands: dark skin tone
U+1F46C ; 6.0 # 👬 men holding hands
U+1F46C U+1F3FB ; 8.0 # 👬🏻 men holding hands: light skin tone
U+1F468 U+1F3FC U+200D U+1F91D U+200D U+1F468 U+1F3FB ; 9.0 # 👨🏼‍🤝‍👨🏻 men holding hands: medium-light skin tone, light skin tone
U+1F46C U+1F3FC ; 8.0 # 👬🏼 men holding hands: medium-light skin tone
U+1F468 U+1F3FD U+200D U+1F91D U+200D U+1F468 U+1F3FB ; 9.0 # 👨🏽‍🤝‍👨🏻 men holding hands: medium skin tone, light skin tone
U+1F468 U+1F3FD U+200D U+1F91D U+200D U+1F468 U+1F3FC ; 9.0 # 👨🏽‍🤝‍👨🏼 men holding hands: medium skin tone, medium-light skin tone
U+1F46C U+1F3FD ; 8.0 # 👬🏽 men holding hands: medium skin tone
U+1F468 U+1F3FE U+200D U+1F91D U+200D U+1F468 U+1F3FB ; 9.0 # 👨🏾‍🤝‍👨🏻 men holding hands: medium-dark skin tone, light skin tone
U+1F468 U+1F3FE U+200D U+1F91D U+200D U+1F468 U+1F3FC ; 9.0 # 👨🏾‍🤝‍👨🏼 men holding hands: medium-dark skin tone, medium-light skin tone
U+1F468 U+1F3FE U+200D U+1F91D U+200D U+1F468 U+1F3FD ; 9.0 # 👨🏾‍🤝‍👨🏽 men holding hands: medium-dark skin tone, medium skin tone
U+1F46C U+1F3FE ; 8.0 # 👬🏾 men holding hands: medium-dark skin tone
U+1F468 U+1F3FF U+200D U+1F91D U+200D U+1F468 U+1F3FB ; 9.0 # 👨🏿‍🤝‍👨🏻 men holding hands: dark skin tone, light skin tone
U+1F468 U+1F3FF U+200D U+1F91D U+200D U+1F468 U+1F3FC ; 9.0 # 👨🏿‍🤝‍👨🏼 men holding hands: dark skin tone, medium-light skin tone
U+1F468 U+1F3FF U+200D U+1F91D U+200D U+1F468 U+1F3FD ; 9.0 # 👨🏿‍🤝‍👨🏽 men holding hands: dark skin tone, medium skin tone
U+1F468 U+1F3FF U+200D U+1F91D U+200D U+1F468 U+1F3FE ; 9.0 # 👨🏿‍🤝‍👨🏾 men holding hands: dark skin tone, medium-dark skin tone
U+1F46C U+1F3FF ; 8.0 # 👬🏿 men holding hands: dark skin tone
U+1F48F ; 6.0 # 💏 kiss
U+1F469 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F468 ; 6.0 # 👩‍❤️‍💋‍👨 kiss: woman, man
U+1F468 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F468 ; 6.0 # 👨‍❤️‍💋‍👨 kiss: man, man
U+1F469 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F469 ; 6.0 # 👩‍❤️‍💋‍👩 kiss: woman, woman
U+1F491 ; 6.0 # 💑 couple with heart
U+1F469 U+200D U+2764 U+FE0F U+200D U+1F468 ; 6.0 # 👩‍❤️‍👨 couple with heart: woman, man
U+1F468 U+200D U+2764 U+FE0F U+200D U+1F468 ; 6.0 # 👨‍❤️‍👨 couple with heart: man, man
U+1F469 U+200D U+2764 U+FE0F U+200D U+1F469 ; 6.0 # 👩‍❤️‍👩 couple with heart: woman, woman
U+1F46A ; 6.0 # 👪 family
U+1F468 U+200D U+1F469 U+200D U+1F466 ; 6.0 # 👨‍👩‍👦 family: man, woman, boy
U+1F468 U+200D U+1F469 U+200D U+1F467 ; 6.0 # 👨‍👩‍👧 family: man, woman, girl
U+1F468 U+200D U+1F469 U+200D U+1F467 U+200D U+1F466 ; 6.0 # 👨‍👩‍👧‍👦 family: man, woman, girl, boy
U+1F468 U+200D U+1F469 U+200D U+1F466 U+200D U+1F466 ; 6.0 # 👨‍👩‍👦‍👦 family: man, woman, boy, boy
U+1F468 U+200D U+1F469 U+200D U+1F467 U+200D U+1F467 ; 6.0 # 👨‍👩‍👧‍👧 family: man, woman, girl, girl
U+1F468 U+200D U+1F468 U+200D U+1F466 ; 6.0 # 👨‍👨‍👦 family: man, man, boy
U+1F468 U+200D U+1F468 U+200D U+1F467 ; 6.0 # 👨‍👨‍👧 family: man, man, girl
U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F466 ; 6.0 # 👨‍👨‍👧‍👦 family: man, man, girl, boy
U+1F468 U+200D U+1F468 U+200D U+1F466 U+200D U+1F466 ; 6.0 # 👨‍👨‍👦‍👦 family: man, man, boy, boy
U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F467 ; 6.0 # 👨‍👨‍👧‍👧 family: man, man, girl, girl
U+1F469 U+200D U+1F469 U+200D U+1F466 ; 6.0 # 👩‍👩‍👦 family: woman, woman, boy
U+1F469 U+200D U+1F469 U+200D U+1F467 ; 6.0 # 👩‍👩‍👧 family: woman, woman, girl
U+1F469 U+200D U+1F469 U+200D U+1F467 U+200D U+1F466 ; 6.0 # 👩‍👩‍👧‍👦 family: woman, woman, girl, boy
U+1F469 U+200D U+1F469 U+200D U+1F466 U+200D U+1F466 ; 6.0 # 👩‍👩‍👦‍👦 family: woman, woman, boy, boy
U+1F469 U+200D U+1F469 U+200D U+1F467 U+200D U+1F467 ; 6.0 # 👩‍👩‍👧‍👧 family: woman, woman, girl, girl
U+1F468 U+200D U+1F466 ; 6.0 # 👨‍👦 family: man, boy
U+1F468 U+200D U+1F466 U+200D U+1F466 ; 6.0 # 👨‍👦‍👦 family: man, boy, boy
U+1F468 U+200D U+1F467 ; 6.0 # 👨‍👧 family: man, girl
U+1F468 U+200D U+1F467 U+200D U+1F466 ; 6.0 # 👨‍👧‍👦 family: man, girl, boy
U+1F468 U+200D U+1F467 U+200D U+1F467 ; 6.0 # 👨‍👧‍👧 family: man, girl, girl
U+1F469 U+200D U+1F466 ; 6.0 # 👩‍👦 family: woman, boy
U+1F469 U+200D U+1F466 U+200D U+1F466 ; 6.0 # 👩‍👦‍👦 family: woman, boy, boy
U+1F469 U+200D U+1F467 ; 6.0 # 👩‍👧 family: woman, girl
U+1F469 U+200D U+1F467 U+200D U+1F466 ; 6.0 # 👩‍👧‍👦 family: woman, girl, boy
U+1F469 U+200D U+1F467 U+200D U+1F467 ; 6.0 # 👩‍👧‍👧 family: woman, girl, girl
U+1F5E3 ; 7.0 # 🗣 speaking head
U+1F464 ; 6.0 # 👤 bust in silhouette
U+1F465 ; 6.0 # 👥 busts in silhouette
U+1F463 ; 6.0 # 👣 footprints
U+1F3FB ; 8.0 # 🏻 light skin tone
U+1F3FC ; 8.0 # 🏼 medium-light skin tone
U+1F3FD ; 8.0 # 🏽 medium skin tone
U+1F3FE ; 8.0 # 🏾 medium-dark skin tone
U+1F3FF ; 8.0 # 🏿 dark skin tone
U+1F9B0 ; 11.0 # 🦰 red hair
U+1F9B1 ; 11.0 # 🦱 curly hair
U+1F9B3 ; 11.0 # 🦳 white hair
U+1F9B2 ; 11.0 # 🦲 bald
U+1F435 ; 6.0 # 🐵 monkey face
U+1F412 ; 6.0 # 🐒 monkey
U+1F98D ; 9.0 # 🦍 gorilla
U+1F9A7 ; 12.0 # 🦧 orangutan
U+1F436 ; 6.0 # 🐶 dog face
U+1F415 ; 6.0 # 🐕 dog
U+1F9AE ; 12.0 # 🦮 guide dog
U+1F415 U+200D U+1F9BA ; 12.0 # 🐕‍🦺 service dog
U+1F429 ; 6.0 # 🐩 poodle
U+1F43A ; 6.0 # 🐺 wolf
U+1F98A ; 9.0 # 🦊 fox
U+1F99D ; 11.0 # 🦝 raccoon
U+1F431 ; 6.0 # 🐱 cat face
U+1F408 ; 6.0 # 🐈 cat
U+1F981 ; 8.0 # 🦁 lion
U+1F42F ; 6.0 # 🐯 tiger face
U+1F405 ; 6.0 # 🐅 tiger
U+1F406 ; 6.0 # 🐆 leopard
U+1F434 ; 6.0 # 🐴 horse face
U+1F40E ; 6.0 # 🐎 horse
U+1F984 ; 8.0 # 🦄 unicorn
U+1F993 ; 10.0 # 🦓 zebra
U+1F98C ; 9.0 # 🦌 deer
U+1F42E ; 6.0 # 🐮 cow face
U+1F402 ; 6.0 # 🐂 ox
U+1F403 ; 6.0 # 🐃 water buffalo
U+1F404 ; 6.0 # 🐄 cow
U+1F437 ; 6.0 # 🐷 pig face
U+1F416 ; 6.0 # 🐖 pig
U+1F417 ; 6.0 # 🐗 boar
U+1F43D ; 6.0 # 🐽 pig nose
U+1F40F ; 6.0 # 🐏 ram
U+1F411 ; 6.0 # 🐑 ewe
U+1F410 ; 6.0 # 🐐 goat
U+1F42A ; 6.0 # 🐪 camel
U+1F42B ; 6.0 # 🐫 two-hump camel
U+1F999 ; 11.0 # 🦙 llama
U+1F992 ; 10.0 # 🦒 giraffe
U+1F418 ; 6.0 # 🐘 elephant
U+1F98F ; 9.0 # 🦏 rhinoceros
U+1F99B ; 11.0 # 🦛 hippopotamus
U+1F42D ; 6.0 # 🐭 mouse face
U+1F401 ; 6.0 # 🐁 mouse
U+1F400 ; 6.0 # 🐀 rat
U+1F439 ; 6.0 # 🐹 hamster
U+1F430 ; 6.0 # 🐰 rabbit face
U+1F407 ; 6.0 # 🐇 rabbit
U+1F43F ; 7.0 # 🐿 chipmunk
U+1F994 ; 10.0 # 🦔 hedgehog
U+1F987 ; 9.0 # 🦇 bat
U+1F43B ; 6.0 # 🐻 bear
U+1F428 ; 6.0 # 🐨 koala
U+1F43C ; 6.0 # 🐼 panda
U+1F9A5 ; 12.0 # 🦥 sloth
U+1F9A6 ; 12.0 # 🦦 otter
U+1F9A8 ; 12.0 # 🦨 skunk
U+1F998 ; 11.0 # 🦘 kangaroo
U+1F9A1 ; 11.0 # 🦡 badger
U+1F43E ; 6.0 # 🐾 paw prints
U+1F983 ; 8.0 # 🦃 turkey
U+1F414 ; 6.0 # 🐔 chicken
U+1F413 ; 6.0 # 🐓 rooster
U+1F423 ; 6.0 # 🐣 hatching chick
U+1F424 ; 6.0 # 🐤 baby chick
U+1F425 ; 6.0 # 🐥 front-facing baby chick
U+1F426 ; 6.0 # 🐦 bird
U+1F427 ; 6.0 # 🐧 penguin
U+1F54A ; 7.0 # 🕊 dove
U+1F985 ; 9.0 # 🦅 eagle
U+1F986 ; 9.0 # 🦆 duck
U+1F9A2 ; 11.0 # 🦢 swan
U+1F989 ; 9.0 # 🦉 owl
U+1F9A9 ; 12.0 # 🦩 flamingo
U+1F99A ; 11.0 # 🦚 peacock
U+1F99C ; 11.0 # 🦜 parrot
U+1F438 ; 6.0 # 🐸 frog
U+1F40A ; 6.0 # 🐊 crocodile
U+1F422 ; 6.0 # 🐢 turtle
U+1F98E ; 9.0 # 🦎 lizard
U+1F40D ; 6.0 # 🐍 snake
U+1F432 ; 6.0 # 🐲 dragon face
U+1F409 ; 6.0 # 🐉 dragon
U+1F995 ; 10.0 # 🦕 sauropod
U+1F996 ; 10.0 # 🦖 T-Rex
U+1F433 ; 6.0 # 🐳 spouting whale
U+1F40B ; 6.0 # 🐋 whale
U+1F42C ; 6.0 # 🐬 dolphin
U+1F41F ; 6.0 # 🐟 fish
U+1F420 ; 6.0 # 🐠 tropical fish
U+1F421 ; 6.0 # 🐡 blowfish
U+1F988 ; 9.0 # 🦈 shark
U+1F419 ; 6.0 # 🐙 octopus
U+1F41A ; 6.0 # 🐚 spiral shell
U+1F40C ; 6.0 # 🐌 snail
U+1F98B ; 9.0 # 🦋 butterfly
U+1F41B ; 6.0 # 🐛 bug
U+1F41C ; 6.0 # 🐜 ant
U+1F41D ; 6.0 # 🐝 honeybee
U+1F41E ; 6.0 # 🐞 lady beetle
U+1F997 ; 10.0 # 🦗 cricket
U+1F577 ; 7.0 # 🕷 spider
U+1F578 ; 7.0 # 🕸 spider web
U+1F982 ; 8.0 # 🦂 scorpion
U+1F99F ; 11.0 # 🦟 mosquito
U+1F9A0 ; 11.0 # 🦠 microbe
U+1F490 ; 6.0 # 💐 bouquet
U+1F338 ; 6.0 # 🌸 cherry blossom
U+1F4AE ; 6.0 # 💮 white flower
U+1F3F5 ; 7.0 # 🏵 rosette
U+1F339 ; 6.0 # 🌹 rose
U+1F940 ; 9.0 # 🥀 wilted flower
U+1F33A ; 6.0 # 🌺 hibiscus
U+1F33B ; 6.0 # 🌻 sunflower
U+1F33C ; 6.0 # 🌼 blossom
U+1F337 ; 6.0 # 🌷 tulip
U+1F331 ; 6.0 # 🌱 seedling
U+1F332 ; 6.0 # 🌲 evergreen tree
U+1F333 ; 6.0 # 🌳 deciduous tree
U+1F334 ; 6.0 # 🌴 palm tree
U+1F335 ; 6.0 # 🌵 cactus
U+1F33E ; 6.0 # 🌾 sheaf of rice
U+1F33F ; 6.0 # 🌿 herb
U+2618 ; 4.1 # ☘ shamrock
U+1F340 ; 6.0 # 🍀 four leaf clover
U+1F341 ; 6.0 # 🍁 maple leaf
U+1F342 ; 6.0 # 🍂 fallen leaf
U+1F343 ; 6.0 # 🍃 leaf fluttering in wind
U+1F347 ; 6.0 # 🍇 grapes
U+1F348 ; 6.0 # 🍈 melon
U+1F349 ; 6.0 # 🍉 watermelon
U+1F34A ; 6.0 # 🍊 tangerine
U+1F34B ; 6.0 # 🍋 lemon
U+1F34C ; 6.0 # 🍌 banana
U+1F34D ; 6.0 # 🍍 pineapple
U+1F96D ; 11.0 # 🥭 mango
U+1F34E ; 6.0 # 🍎 red apple
U+1F34F ; 6.0 # 🍏 green apple
U+1F350 ; 6.0 # 🍐 pear
U+1F351 ; 6.0 # 🍑 peach
U+1F352 ; 6.0 # 🍒 cherries
U+1F353 ; 6.0 # 🍓 strawberry
U+1F95D ; 9.0 # 🥝 kiwi fruit
U+1F345 ; 6.0 # 🍅 tomato
U+1F965 ; 10.0 # 🥥 coconut
U+1F951 ; 9.0 # 🥑 avocado
U+1F346 ; 6.0 # 🍆 eggplant
U+1F954 ; 9.0 # 🥔 potato
U+1F955 ; 9.0 # 🥕 carrot
U+1F33D ; 6.0 # 🌽 ear of corn
U+1F336 ; 7.0 # 🌶 hot pepper
U+1F952 ; 9.0 # 🥒 cucumber
U+1F96C ; 11.0 # 🥬 leafy green
U+1F966 ; 10.0 # 🥦 broccoli
U+1F9C4 ; 12.0 # 🧄 garlic
U+1F9C5 ; 12.0 # 🧅 onion
U+1F344 ; 6.0 # 🍄 mushroom
U+1F95C ; 9.0 # 🥜 peanuts
U+1F330 ; 6.0 # 🌰 chestnut
U+1F35E ; 6.0 # 🍞 bread
U+1F950 ; 9.0 # 🥐 croissant
U+1F956 ; 9.0 # 🥖 baguette bread
U+1F968 ; 10.0 # 🥨 pretzel
U+1F96F ; 11.0 # 🥯 bagel
U+1F95E ; 9.0 # 🥞 pancakes
U+1F9C7 ; 12.0 # 🧇 waffle
U+1F9C0 ; 8.0 # 🧀 cheese wedge
U+1F356 ; 6.0 # 🍖 meat on bone
U+1F357 ; 6.0 # 🍗 poultry leg
U+1F969 ; 10.0 # 🥩 cut of meat
U+1F953 ; 9.0 # 🥓 bacon
U+1F354 ; 6.0 # 🍔 hamburger
U+1F35F ; 6.0 # 🍟 french fries
U+1F355 ; 6.0 # 🍕 pizza
U+1F32D ; 8.0 # 🌭 hot dog
U+1F96A ; 10.0 # 🥪 sandwich
U+1F32E ; 8.0 # 🌮 taco
U+1F32F ; 8.0 # 🌯 burrito
U+1F959 ; 9.0 # 🥙 stuffed flatbread
U+1F9C6 ; 12.0 # 🧆 falafel
U+1F95A ; 9.0 # 🥚 egg
U+1F373 ; 6.0 # 🍳 cooking
U+1F958 ; 9.0 # 🥘 shallow pan of food
U+1F372 ; 6.0 # 🍲 pot of food
U+1F963 ; 10.0 # 🥣 bowl with spoon
U+1F957 ; 9.0 # 🥗 green salad
U+1F37F ; 8.0 # 🍿 popcorn
U+1F9C8 ; 12.0 # 🧈 butter
U+1F9C2 ; 11.0 # 🧂 salt
U+1F96B ; 10.0 # 🥫 canned food
U+1F371 ; 6.0 # 🍱 bento box
U+1F358 ; 6.0 # 🍘 rice cracker
U+1F359 ; 6.0 # 🍙 rice ball
U+1F35A ; 6.0 # 🍚 cooked rice
U+1F35B ; 6.0 # 🍛 curry rice
U+1F35C ; 6.0 # 🍜 steaming bowl
U+1F35D ; 6.0 # 🍝 spaghetti
U+1F360 ; 6.0 # 🍠 roasted sweet potato
U+1F362 ; 6.0 # 🍢 oden
U+1F363 ; 6.0 # 🍣 sushi
U+1F364 ; 6.0 # 🍤 fried shrimp
U+1F365 ; 6.0 # 🍥 fish cake with swirl
U+1F96E ; 11.0 # 🥮 moon cake
U+1F361 ; 6.0 # 🍡 dango
U+1F95F ; 10.0 # 🥟 dumpling
U+1F960 ; 10.0 # 🥠 fortune cookie
U+1F961 ; 10.0 # 🥡 takeout box
U+1F980 ; 8.0 # 🦀 crab
U+1F99E ; 11.0 # 🦞 lobster
U+1F990 ; 9.0 # 🦐 shrimp
U+1F991 ; 9.0 # 🦑 squid
U+1F9AA ; 12.0 # 🦪 oyster
U+1F366 ; 6.0 # 🍦 soft ice cream
U+1F367 ; 6.0 # 🍧 shaved ice
U+1F368 ; 6.0 # 🍨 ice cream
U+1F369 ; 6.0 # 🍩 doughnut
U+1F36A ; 6.0 # 🍪 cookie
U+1F382 ; 6.0 # 🎂 birthday cake
U+1F370 ; 6.0 # 🍰 shortcake
U+1F9C1 ; 11.0 # 🧁 cupcake
U+1F967 ; 10.0 # 🥧 pie
U+1F36B ; 6.0 # 🍫 chocolate bar
U+1F36C ; 6.0 # 🍬 candy
U+1F36D ; 6.0 # 🍭 lollipop
U+1F36E ; 6.0 # 🍮 custard
U+1F36F ; 6.0 # 🍯 honey pot
U+1F37C ; 6.0 # 🍼 baby bottle
U+1F95B ; 9.0 # 🥛 glass of milk
U+2615 ; 4.0 # ☕ hot beverage
U+1F375 ; 6.0 # 🍵 teacup without handle
U+1F376 ; 6.0 # 🍶 sake
U+1F37E ; 8.0 # 🍾 bottle with popping cork
U+1F377 ; 6.0 # 🍷 wine glass
U+1F378 ; 6.0 # 🍸 cocktail glass
U+1F379 ; 6.0 # 🍹 tropical drink
U+1F37A ; 6.0 # 🍺 beer mug
U+1F37B ; 6.0 # 🍻 clinking beer mugs
U+1F942 ; 9.0 # 🥂 clinking glasses
U+1F943 ; 9.0 # 🥃 tumbler glass
U+1F964 ; 10.0 # 🥤 cup with straw
U+1F9C3 ; 12.0 # 🧃 beverage box
U+1F9C9 ; 12.0 # 🧉 mate
U+1F9CA ; 12.0 # 🧊 ice
U+1F962 ; 10.0 # 🥢 chopsticks
U+1F37D ; 7.0 # 🍽 fork and knife with plate
U+1F374 ; 6.0 # 🍴 fork and knife
U+1F944 ; 9.0 # 🥄 spoon
U+1F52A ; 6.0 # 🔪 kitchen knife
U+1F3FA ; 8.0 # 🏺 amphora
U+1F30D ; 6.0 # 🌍 globe showing Europe-Africa
U+1F30E ; 6.0 # 🌎 globe showing Americas
U+1F30F ; 6.0 # 🌏 globe showing Asia-Australia
U+1F310 ; 6.0 # 🌐 globe with meridians
U+1F5FA ; 7.0 # 🗺 world map
U+1F5FE ; 6.0 # 🗾 map of Japan
U+1F9ED ; 11.0 # 🧭 compass
U+1F3D4 ; 7.0 # 🏔 snow-capped mountain
U+26F0 ; 5.2 # ⛰ mountain
U+1F30B ; 6.0 # 🌋 volcano
U+1F5FB ; 6.0 # 🗻 mount fuji
U+1F3D5 ; 7.0 # 🏕 camping
U+1F3D6 ; 7.0 # 🏖 beach with umbrella
U+1F3DC ; 7.0 # 🏜 desert
U+1F3DD ; 7.0 # 🏝 desert island
U+1F3DE ; 7.0 # 🏞 national park
U+1F3DF ; 7.0 # 🏟 stadium
U+1F3DB ; 7.0 # 🏛 classical building
U+1F3D7 ; 7.0 # 🏗 building construction
U+1F9F1 ; 11.0 # 🧱 brick
U+1F3D8 ; 7.0 # 🏘 houses
U+1F3DA ; 7.0 # 🏚 derelict house
U+1F3E0 ; 6.0 # 🏠 house
U+1F3E1 ; 6.0 # 🏡 house with garden
U+1F3E2 ; 6.0 # 🏢 office building
U+1F3E3 ; 6.0 # 🏣 Japanese post office
U+1F3E4 ; 6.0 # 🏤 post office
U+1F3E5 ; 6.0 # 🏥 hospital
U+1F3E6 ; 6.0 # 🏦 bank
U+1F3E8 ; 6.0 # 🏨 hotel
U+1F3E9 ; 6.0 # 🏩 love hotel
U+1F3EA ; 6.0 # 🏪 convenience store
U+1F3EB ; 6.0 # 🏫 school
U+1F3EC ; 6.0 # 🏬 department store
U+1F3ED ; 6.0 # 🏭 factory
U+1F3EF ; 6.0 # 🏯 Japanese castle
U+1F3F0 ; 6.0 # 🏰 castle
U+1F492 ; 6.0 # 💒 wedding
U+1F5FC ; 6.0 # 🗼 Tokyo tower
U+1F5FD ; 6.0 # 🗽 Statue of Liberty
U+26EA ; 5.2 # ⛪ church
U+1F54C ; 8.0 # 🕌 mosque
U+1F6D5 ; 12.0 # 🛕 hindu temple
U+1F54D ; 8.0 # 🕍 synagogue
U+26E9 ; 5.2 # ⛩ shinto shrine
U+1F54B ; 8.0 # 🕋 kaaba
U+26F2 ; 5.2 # ⛲ fountain
U+26FA ; 5.2 # ⛺ tent
U+1F301 ; 6.0 # 🌁 foggy
U+1F303 ; 6.0 # 🌃 night with stars
U+1F3D9 ; 7.0 # 🏙 cityscape
U+1F304 ; 6.0 # 🌄 sunrise over mountains
U+1F305 ; 6.0 # 🌅 sunrise
U+1F306 ; 6.0 # 🌆 cityscape at dusk
U+1F307 ; 6.0 # 🌇 sunset
U+1F309 ; 6.0 # 🌉 bridge at night
U+2668 ; 1.1 # ♨ hot springs
U+1F3A0 ; 6.0 # 🎠 carousel horse
U+1F3A1 ; 6.0 # 🎡 ferris wheel
U+1F3A2 ; 6.0 # 🎢 roller coaster
U+1F488 ; 6.0 # 💈 barber pole
U+1F3AA ; 6.0 # 🎪 circus tent
U+1F682 ; 6.0 # 🚂 locomotive
U+1F683 ; 6.0 # 🚃 railway car
U+1F684 ; 6.0 # 🚄 high-speed train
U+1F685 ; 6.0 # 🚅 bullet train
U+1F686 ; 6.0 # 🚆 train
U+1F687 ; 6.0 # 🚇 metro
U+1F688 ; 6.0 # 🚈 light rail
U+1F689 ; 6.0 # 🚉 station
U+1F68A ; 6.0 # 🚊 tram
U+1F69D ; 6.0 # 🚝 monorail
U+1F69E ; 6.0 # 🚞 mountain railway
U+1F68B ; 6.0 # 🚋 tram car
U+1F68C ; 6.0 # 🚌 bus
U+1F68D ; 6.0 # 🚍 oncoming bus
U+1F68E ; 6.0 # 🚎 trolleybus
U+1F690 ; 6.0 # 🚐 minibus
U+1F691 ; 6.0 # 🚑 ambulance
U+1F692 ; 6.0 # 🚒 fire engine
U+1F693 ; 6.0 # 🚓 police car
U+1F694 ; 6.0 # 🚔 oncoming police car
U+1F695 ; 6.0 # 🚕 taxi
U+1F696 ; 6.0 # 🚖 oncoming taxi
U+1F697 ; 6.0 # 🚗 automobile
U+1F698 ; 6.0 # 🚘 oncoming automobile
U+1F699 ; 6.0 # 🚙 sport utility vehicle
U+1F69A ; 6.0 # 🚚 delivery truck
U+1F69B ; 6.0 # 🚛 articulated lorry
U+1F69C ; 6.0 # 🚜 tractor
U+1F3CE ; 7.0 # 🏎 racing car
U+1F3CD ; 7.0 # 🏍 motorcycle
U+1F6F5 ; 9.0 # 🛵 motor scooter
U+1F9BD ; 12.0 # 🦽 manual wheelchair
U+1F9BC ; 12.0 # 🦼 motorized wheelchair
U+1F6FA ; 12.0 # 🛺 auto rickshaw
U+1F6B2 ; 6.0 # 🚲 bicycle
U+1F6F4 ; 9.0 # 🛴 kick scooter
U+1F6F9 ; 11.0 # 🛹 skateboard
U+1F68F ; 6.0 # 🚏 bus stop
U+1F6E3 ; 7.0 # 🛣 motorway
U+1F6E4 ; 7.0 # 🛤 railway track
U+1F6E2 ; 7.0 # 🛢 oil drum
U+26FD ; 5.2 # ⛽ fuel pump
U+1F6A8 ; 6.0 # 🚨 police car light
U+1F6A5 ; 6.0 # 🚥 horizontal traffic light
U+1F6A6 ; 6.0 # 🚦 vertical traffic light
U+1F6D1 ; 9.0 # 🛑 stop sign
U+1F6A7 ; 6.0 # 🚧 construction
U+2693 ; 4.1 # ⚓ anchor
U+26F5 ; 5.2 # ⛵ sailboat
U+1F6F6 ; 9.0 # 🛶 canoe
U+1F6A4 ; 6.0 # 🚤 speedboat
U+1F6F3 ; 7.0 # 🛳 passenger ship
U+26F4 ; 5.2 # ⛴ ferry
U+1F6E5 ; 7.0 # 🛥 motor boat
U+1F6A2 ; 6.0 # 🚢 ship
U+2708 ; 1.1 # ✈ airplane
U+1F6E9 ; 7.0 # 🛩 small airplane
U+1F6EB ; 7.0 # 🛫 airplane departure
U+1F6EC ; 7.0 # 🛬 airplane arrival
U+1FA82 ; 12.0 # 🪂 parachute
U+1F4BA ; 6.0 # 💺 seat
U+1F681 ; 6.0 # 🚁 helicopter
U+1F69F ; 6.0 # 🚟 suspension railway
U+1F6A0 ; 6.0 # 🚠 mountain cableway
U+1F6A1 ; 6.0 # 🚡 aerial tramway
U+1F6F0 ; 7.0 # 🛰 satellite
U+1F680 ; 6.0 # 🚀 rocket
U+1F6F8 ; 10.0 # 🛸 flying saucer
U+1F6CE ; 7.0 # 🛎 bellhop bell
U+1F9F3 ; 11.0 # 🧳 luggage
U+231B ; 1.1 # ⌛ hourglass done
U+23F3 ; 6.0 # ⏳ hourglass not done
U+231A ; 1.1 # ⌚ watch
U+23F0 ; 6.0 # ⏰ alarm clock
U+23F1 ; 6.0 # ⏱ stopwatch
U+23F2 ; 6.0 # ⏲ timer clock
U+1F570 ; 7.0 # 🕰 mantelpiece clock
U+1F55B ; 6.0 # 🕛 twelve o’clock
U+1F567 ; 6.0 # 🕧 twelve-thirty
U+1F550 ; 6.0 # 🕐 one o’clock
U+1F55C ; 6.0 # 🕜 one-thirty
U+1F551 ; 6.0 # 🕑 two o’clock
U+1F55D ; 6.0 # 🕝 two-thirty
U+1F552 ; 6.0 # 🕒 three o’clock
U+1F55E ; 6.0 # 🕞 three-thirty
U+1F553 ; 6.0 # 🕓 four o’clock
U+1F55F ; 6.0 # 🕟 four-thirty
U+1F554 ; 6.0 # 🕔 five o’clock
U+1F560 ; 6.0 # 🕠 five-thirty
U+1F555 ; 6.0 # 🕕 six o’clock
U+1F561 ; 6.0 # 🕡 six-thirty
U+1F556 ; 6.0 # 🕖 seven o’clock
U+1F562 ; 6.0 # 🕢 seven-thirty
U+1F557 ; 6.0 # 🕗 eight o’clock
U+1F563 ; 6.0 # 🕣 eight-thirty
U+1F558 ; 6.0 # 🕘 nine o’clock
U+1F564 ; 6.0 # 🕤 nine-thirty
U+1F559 ; 6.0 # 🕙 ten o’clock
U+1F565 ; 6.0 # 🕥 ten-thirty
U+1F55A ; 6.0 # 🕚 eleven o’clock
U+1F566 ; 6.0 # 🕦 eleven-thirty
U+1F311 ; 6.0 # 🌑 new moon
U+1F312 ; 6.0 # 🌒 waxing crescent moon
U+1F313 ; 6.0 # 🌓 first quarter moon
U+1F314 ; 6.0 # 🌔 waxing gibbous moon
U+1F315 ; 6.0 # 🌕 full moon
U+1F316 ; 6.0 # 🌖 waning gibbous moon
U+1F317 ; 6.0 # 🌗 last quarter moon
U+1F318 ; 6.0 # 🌘 waning crescent moon
U+1F319 ; 6.0 # 🌙 crescent moon
U+1F31A ; 6.0 # 🌚 new moon face
U+1F31B ; 6.0 # 🌛 first quarter moon face
U+1F31C ; 6.0 # 🌜 last quarter moon face
U+1F321 ; 7.0 # 🌡 thermometer
U+2600 ; 1.1 # ☀ sun
U+1F31D ; 6.0 # 🌝 full moon face
U+1F31E ; 6.0 # 🌞 sun with face
U+1FA90 ; 12.0 # 🪐 ringed planet
U+2B50 ; 5.1 # ⭐ star
U+1F31F ; 6.0 # 🌟 glowing star
U+1F320 ; 6.0 # 🌠 shooting star
U+1F30C ; 6.0 # 🌌 milky way
U+2601 ; 1.1 # ☁ cloud
U+26C5 ; 5.2 # ⛅ sun behind cloud
U+26C8 ; 5.2 # ⛈ cloud with lightning and rain
U+1F324 ; 7.0 # 🌤 sun behind small cloud
U+1F325 ; 7.0 # 🌥 sun behind large cloud
U+1F326 ; 7.0 # 🌦 sun behind rain cloud
U+1F327 ; 7.0 # 🌧 cloud with rain
U+1F328 ; 7.0 # 🌨 cloud with snow
U+1F329 ; 7.0 # 🌩 cloud with lightning
U+1F32A ; 7.0 # 🌪 tornado
U+1F32B ; 7.0 # 🌫 fog
U+1F32C ; 7.0 # 🌬 wind face
U+1F300 ; 6.0 # 🌀 cyclone
U+1F308 ; 6.0 # 🌈 rainbow
U+1F302 ; 6.0 # 🌂 closed umbrella
U+2602 ; 1.1 # ☂ umbrella
U+2614 ; 4.0 # ☔ umbrella with rain drops
U+26F1 ; 5.2 # ⛱ umbrella on ground
U+26A1 ; 4.0 # ⚡ high voltage
U+2744 ; 1.1 # ❄ snowflake
U+2603 ; 1.1 # ☃ snowman
U+26C4 ; 5.2 # ⛄ snowman without snow
U+2604 ; 1.1 # ☄ comet
U+1F525 ; 6.0 # 🔥 fire
U+1F4A7 ; 6.0 # 💧 droplet
U+1F30A ; 6.0 # 🌊 water wave
U+1F383 ; 6.0 # 🎃 jack-o-lantern
U+1F384 ; 6.0 # 🎄 Christmas tree
U+1F386 ; 6.0 # 🎆 fireworks
U+1F387 ; 6.0 # 🎇 sparkler
U+1F9E8 ; 11.0 # 🧨 firecracker
U+2728 ; 6.0 # ✨ sparkles
U+1F388 ; 6.0 # 🎈 balloon
U+1F389 ; 6.0 # 🎉 party popper
U+1F38A ; 6.0 # 🎊 confetti ball
U+1F38B ; 6.0 # 🎋 tanabata tree
U+1F38D ; 6.0 # 🎍 pine decoration
U+1F38E ; 6.0 # 🎎 Japanese dolls
U+1F38F ; 6.0 # 🎏 carp streamer
U+1F390 ; 6.0 # 🎐 wind chime
U+1F391 ; 6.0 # 🎑 moon viewing ceremony
U+1F9E7 ; 11.0 # 🧧 red envelope
U+1F380 ; 6.0 # 🎀 ribbon
U+1F381 ; 6.0 # 🎁 wrapped gift
U+1F397 ; 7.0 # 🎗 reminder ribbon
U+1F39F ; 7.0 # 🎟 admission tickets
U+1F3AB ; 6.0 # 🎫 ticket
U+1F396 ; 7.0 # 🎖 military medal
U+1F3C6 ; 6.0 # 🏆 trophy
U+1F3C5 ; 7.0 # 🏅 sports medal
U+1F947 ; 9.0 # 🥇 1st place medal
U+1F948 ; 9.0 # 🥈 2nd place medal
U+1F949 ; 9.0 # 🥉 3rd place medal
U+26BD ; 5.2 # ⚽ soccer ball
U+26BE ; 5.2 # ⚾ baseball
U+1F94E ; 11.0 # 🥎 softball
U+1F3C0 ; 6.0 # 🏀 basketball
U+1F3D0 ; 8.0 # 🏐 volleyball
U+1F3C8 ; 6.0 # 🏈 american football
U+1F3C9 ; 6.0 # 🏉 rugby football
U+1F3BE ; 6.0 # 🎾 tennis
U+1F94F ; 11.0 # 🥏 flying disc
U+1F3B3 ; 6.0 # 🎳 bowling
U+1F3CF ; 8.0 # 🏏 cricket game
U+1F3D1 ; 8.0 # 🏑 field hockey
U+1F3D2 ; 8.0 # 🏒 ice hockey
U+1F94D ; 11.0 # 🥍 lacrosse
U+1F3D3 ; 8.0 # 🏓 ping pong
U+1F3F8 ; 8.0 # 🏸 badminton
U+1F94A ; 9.0 # 🥊 boxing glove
U+1F94B ; 9.0 # 🥋 martial arts uniform
U+1F945 ; 9.0 # 🥅 goal net
U+26F3 ; 5.2 # ⛳ flag in hole
U+26F8 ; 5.2 # ⛸ ice skate
U+1F3A3 ; 6.0 # 🎣 fishing pole
U+1F93F ; 12.0 # 🤿 diving mask
U+1F3BD ; 6.0 # 🎽 running shirt
U+1F3BF ; 6.0 # 🎿 skis
U+1F6F7 ; 10.0 # 🛷 sled
U+1F94C ; 10.0 # 🥌 curling stone
U+1F3AF ; 6.0 # 🎯 direct hit
U+1FA80 ; 12.0 # 🪀 yo-yo
U+1FA81 ; 12.0 # 🪁 kite
U+1F3B1 ; 6.0 # 🎱 pool 8 ball
U+1F52E ; 6.0 # 🔮 crystal ball
U+1F9FF ; 11.0 # 🧿 nazar amulet
U+1F3AE ; 6.0 # 🎮 video game
U+1F579 ; 7.0 # 🕹 joystick
U+1F3B0 ; 6.0 # 🎰 slot machine
U+1F3B2 ; 6.0 # 🎲 game die
U+1F9E9 ; 11.0 # 🧩 puzzle piece
U+1F9F8 ; 11.0 # 🧸 teddy bear
U+2660 ; 1.1 # ♠ spade suit
U+2665 ; 1.1 # ♥ heart suit
U+2666 ; 1.1 # ♦ diamond suit
U+2663 ; 1.1 # ♣ club suit
U+265F ; 1.1 # ♟ chess pawn
U+1F0CF ; 6.0 # 🃏 joker
U+1F004 ; 5.1 # 🀄 mahjong red dragon
U+1F3B4 ; 6.0 # 🎴 flower playing cards
U+1F3AD ; 6.0 # 🎭 performing arts
U+1F5BC ; 7.0 # 🖼 framed picture
U+1F3A8 ; 6.0 # 🎨 artist palette
U+1F9F5 ; 11.0 # 🧵 thread
U+1F9F6 ; 11.0 # 🧶 yarn
U+1F453 ; 6.0 # 👓 glasses
U+1F576 ; 7.0 # 🕶 sunglasses
U+1F97D ; 11.0 # 🥽 goggles
U+1F97C ; 11.0 # 🥼 lab coat
U+1F9BA ; 12.0 # 🦺 safety vest
U+1F454 ; 6.0 # 👔 necktie
U+1F455 ; 6.0 # 👕 t-shirt
U+1F456 ; 6.0 # 👖 jeans
U+1F9E3 ; 10.0 # 🧣 scarf
U+1F9E4 ; 10.0 # 🧤 gloves
U+1F9E5 ; 10.0 # 🧥 coat
U+1F9E6 ; 10.0 # 🧦 socks
U+1F457 ; 6.0 # 👗 dress
U+1F458 ; 6.0 # 👘 kimono
U+1F97B ; 12.0 # 🥻 sari
U+1FA71 ; 12.0 # 🩱 one-piece swimsuit
U+1FA72 ; 12.0 # 🩲 briefs
U+1FA73 ; 12.0 # 🩳 shorts
U+1F459 ; 6.0 # 👙 bikini
U+1F45A ; 6.0 # 👚 woman’s clothes
U+1F45B ; 6.0 # 👛 purse
U+1F45C ; 6.0 # 👜 handbag
U+1F45D ; 6.0 # 👝 clutch bag
U+1F6CD ; 7.0 # 🛍 shopping bags
U+1F392 ; 6.0 # 🎒 backpack
U+1F45E ; 6.0 # 👞 man’s shoe
U+1F45F ; 6.0 # 👟 running shoe
U+1F97E ; 11.0 # 🥾 hiking boot
U+1F97F ; 11.0 # 🥿 flat shoe
U+1F460 ; 6.0 # 👠 high-heeled shoe
U+1F461 ; 6.0 # 👡 woman’s sandal
U+1FA70 ; 12.0 # 🩰 ballet shoes
U+1F462 ; 6.0 # 👢 woman’s boot
U+1F451 ; 6.0 # 👑 crown
U+1F452 ; 6.0 # 👒 woman’s hat
U+1F3A9 ; 6.0 # 🎩 top hat
U+1F393 ; 6.0 # 🎓 graduation cap
U+1F9E2 ; 10.0 # 🧢 billed cap
U+26D1 ; 5.2 # ⛑ rescue worker’s helmet
U+1F4FF ; 8.0 # 📿 prayer beads
U+1F484 ; 6.0 # 💄 lipstick
U+1F48D ; 6.0 # 💍 ring
U+1F48E ; 6.0 # 💎 gem stone
U+1F507 ; 6.0 # 🔇 muted speaker
U+1F508 ; 6.0 # 🔈 speaker low volume
U+1F509 ; 6.0 # 🔉 speaker medium volume
U+1F50A ; 6.0 # 🔊 speaker high volume
U+1F4E2 ; 6.0 # 📢 loudspeaker
U+1F4E3 ; 6.0 # 📣 megaphone
U+1F4EF ; 6.0 # 📯 postal horn
U+1F514 ; 6.0 # 🔔 bell
U+1F515 ; 6.0 # 🔕 bell with slash
U+1F3BC ; 6.0 # 🎼 musical score
U+1F3B5 ; 6.0 # 🎵 musical note
U+1F3B6 ; 6.0 # 🎶 musical notes
U+1F399 ; 7.0 # 🎙 studio microphone
U+1F39A ; 7.0 # 🎚 level slider
U+1F39B ; 7.0 # 🎛 control knobs
U+1F3A4 ; 6.0 # 🎤 microphone
U+1F3A7 ; 6.0 # 🎧 headphone
U+1F4FB ; 6.0 # 📻 radio
U+1F3B7 ; 6.0 # 🎷 saxophone
U+1F3B8 ; 6.0 # 🎸 guitar
U+1F3B9 ; 6.0 # 🎹 musical keyboard
U+1F3BA ; 6.0 # 🎺 trumpet
U+1F3BB ; 6.0 # 🎻 violin
U+1FA95 ; 12.0 # 🪕 banjo
U+1F941 ; 9.0 # 🥁 drum
U+1F4F1 ; 6.0 # 📱 mobile phone
U+1F4F2 ; 6.0 # 📲 mobile phone with arrow
U+260E ; 1.1 # ☎ telephone
U+1F4DE ; 6.0 # 📞 telephone receiver
U+1F4DF ; 6.0 # 📟 pager
U+1F4E0 ; 6.0 # 📠 fax machine
U+1F50B ; 6.0 # 🔋 battery
U+1F50C ; 6.0 # 🔌 electric plug
U+1F4BB ; 6.0 # 💻 laptop
U+1F5A5 ; 7.0 # 🖥 desktop computer
U+1F5A8 ; 7.0 # 🖨 printer
U+2328 ; 1.1 # ⌨ keyboard
U+1F5B1 ; 7.0 # 🖱 computer mouse
U+1F5B2 ; 7.0 # 🖲 trackball
U+1F4BD ; 6.0 # 💽 computer disk
U+1F4BE ; 6.0 # 💾 floppy disk
U+1F4BF ; 6.0 # 💿 optical disk
U+1F4C0 ; 6.0 # 📀 dvd
U+1F9EE ; 11.0 # 🧮 abacus
U+1F3A5 ; 6.0 # 🎥 movie camera
U+1F39E ; 7.0 # 🎞 film frames
U+1F4FD ; 7.0 # 📽 film projector
U+1F3AC ; 6.0 # 🎬 clapper board
U+1F4FA ; 6.0 # 📺 television
U+1F4F7 ; 6.0 # 📷 camera
U+1F4F8 ; 7.0 # 📸 camera with flash
U+1F4F9 ; 6.0 # 📹 video camera
U+1F4FC ; 6.0 # 📼 videocassette
U+1F50D ; 6.0 # 🔍 magnifying glass tilted left
U+1F50E ; 6.0 # 🔎 magnifying glass tilted right
U+1F56F ; 7.0 # 🕯 candle
U+1F4A1 ; 6.0 # 💡 light bulb
U+1F526 ; 6.0 # 🔦 flashlight
U+1F3EE ; 6.0 # 🏮 red paper lantern
U+1FA94 ; 12.0 # 🪔 diya lamp
U+1F4D4 ; 6.0 # 📔 notebook with decorative cover
U+1F4D5 ; 6.0 # 📕 closed book
U+1F4D6 ; 6.0 # 📖 open book
U+1F4D7 ; 6.0 # 📗 green book
U+1F4D8 ; 6.0 # 📘 blue book
U+1F4D9 ; 6.0 # 📙 orange book
U+1F4DA ; 6.0 # 📚 books
U+1F4D3 ; 6.0 # 📓 notebook
U+1F4D2 ; 6.0 # 📒 ledger
U+1F4C3 ; 6.0 # 📃 page with curl
U+1F4DC ; 6.0 # 📜 scroll
U+1F4C4 ; 6.0 # 📄 page facing up
U+1F4F0 ; 6.0 # 📰 newspaper
U+1F5DE ; 7.0 # 🗞 rolled-up newspaper
U+1F4D1 ; 6.0 # 📑 bookmark tabs
U+1F516 ; 6.0 # 🔖 bookmark
U+1F3F7 ; 7.0 # 🏷 label
U+1F4B0 ; 6.0 # 💰 money bag
U+1F4B4 ; 6.0 # 💴 yen banknote
U+1F4B5 ; 6.0 # 💵 dollar banknote
U+1F4B6 ; 6.0 # 💶 euro banknote
U+1F4B7 ; 6.0 # 💷 pound banknote
U+1F4B8 ; 6.0 # 💸 money with wings
U+1F4B3 ; 6.0 # 💳 credit card
U+1F9FE ; 11.0 # 🧾 receipt
U+1F4B9 ; 6.0 # 💹 chart increasing with yen
U+1F4B1 ; 6.0 # 💱 currency exchange
U+1F4B2 ; 6.0 # 💲 heavy dollar sign
U+2709 ; 1.1 # ✉ envelope
U+1F4E7 ; 6.0 # 📧 e-mail
U+1F4E8 ; 6.0 # 📨 incoming envelope
U+1F4E9 ; 6.0 # 📩 envelope with arrow
U+1F4E4 ; 6.0 # 📤 outbox tray
U+1F4E5 ; 6.0 # 📥 inbox tray
U+1F4E6 ; 6.0 # 📦 package
U+1F4EB ; 6.0 # 📫 closed mailbox with raised flag
U+1F4EA ; 6.0 # 📪 closed mailbox with lowered flag
U+1F4EC ; 6.0 # 📬 open mailbox with raised flag
U+1F4ED ; 6.0 # 📭 open mailbox with lowered flag
U+1F4EE ; 6.0 # 📮 postbox
U+1F5F3 ; 7.0 # 🗳 ballot box with ballot
U+270F ; 1.1 # ✏ pencil
U+2712 ; 1.1 # ✒ black nib
U+1F58B ; 7.0 # 🖋 fountain pen
U+1F58A ; 7.0 # 🖊 pen
U+1F58C ; 7.0 # 🖌 paintbrush
U+1F58D ; 7.0 # 🖍 crayon
U+1F4DD ; 6.0 # 📝 memo
U+1F4BC ; 6.0 # 💼 briefcase
U+1F4C1 ; 6.0 # 📁 file folder
U+1F4C2 ; 6.0 # 📂 open file folder
U+1F5C2 ; 7.0 # 🗂 card index dividers
U+1F4C5 ; 6.0 # 📅 calendar
U+1F4C6 ; 6.0 # 📆 tear-off calendar
U+1F5D2 ; 7.0 # 🗒 spiral notepad
U+1F5D3 ; 7.0 # 🗓 spiral calendar
U+1F4C7 ; 6.0 # 📇 card index
U+1F4C8 ; 6.0 # 📈 chart increasing
U+1F4C9 ; 6.0 # 📉 chart decreasing
U+1F4CA ; 6.0 # 📊 bar chart
U+1F4CB ; 6.0 # 📋 clipboard
U+1F4CC ; 6.0 # 📌 pushpin
U+1F4CD ; 6.0 # 📍 round pushpin
U+1F4CE ; 6.0 # 📎 paperclip
U+1F587 ; 7.0 # 🖇 linked paperclips
U+1F4CF ; 6.0 # 📏 straight ruler
U+1F4D0 ; 6.0 # 📐 triangular ruler
U+2702 ; 1.1 # ✂ scissors
U+1F5C3 ; 7.0 # 🗃 card file box
U+1F5C4 ; 7.0 # 🗄 file cabinet
U+1F5D1 ; 7.0 # 🗑 wastebasket
U+1F512 ; 6.0 # 🔒 locked
U+1F513 ; 6.0 # 🔓 unlocked
U+1F50F ; 6.0 # 🔏 locked with pen
U+1F510 ; 6.0 # 🔐 locked with key
U+1F511 ; 6.0 # 🔑 key
U+1F5DD ; 7.0 # 🗝 old key
U+1F528 ; 6.0 # 🔨 hammer
U+1FA93 ; 12.0 # 🪓 axe
U+26CF ; 5.2 # ⛏ pick
U+2692 ; 4.1 # ⚒ hammer and pick
U+1F6E0 ; 7.0 # 🛠 hammer and wrench
U+1F5E1 ; 7.0 # 🗡 dagger
U+2694 ; 4.1 # ⚔ crossed swords
U+1F52B ; 6.0 # 🔫 pistol
U+1F3F9 ; 8.0 # 🏹 bow and arrow
U+1F6E1 ; 7.0 # 🛡 shield
U+1F527 ; 6.0 # 🔧 wrench
U+1F529 ; 6.0 # 🔩 nut and bolt
U+2699 ; 4.1 # ⚙ gear
U+1F5DC ; 7.0 # 🗜 clamp
U+2696 ; 4.1 # ⚖ balance scale
U+1F9AF ; 12.0 # 🦯 probing cane
U+1F517 ; 6.0 # 🔗 link
U+26D3 ; 5.2 # ⛓ chains
U+1F9F0 ; 11.0 # 🧰 toolbox
U+1F9F2 ; 11.0 # 🧲 magnet
U+2697 ; 4.1 # ⚗ alembic
U+1F9EA ; 11.0 # 🧪 test tube
U+1F9EB ; 11.0 # 🧫 petri dish
U+1F9EC ; 11.0 # 🧬 dna
U+1F52C ; 6.0 # 🔬 microscope
U+1F52D ; 6.0 # 🔭 telescope
U+1F4E1 ; 6.0 # 📡 satellite antenna
U+1F489 ; 6.0 # 💉 syringe
U+1FA78 ; 12.0 # 🩸 drop of blood
U+1F48A ; 6.0 # 💊 pill
U+1FA79 ; 12.0 # 🩹 adhesive bandage
U+1FA7A ; 12.0 # 🩺 stethoscope
U+1F6AA ; 6.0 # 🚪 door
U+1F6CF ; 7.0 # 🛏 bed
U+1F6CB ; 7.0 # 🛋 couch and lamp
U+1FA91 ; 12.0 # 🪑 chair
U+1F6BD ; 6.0 # 🚽 toilet
U+1F6BF ; 6.0 # 🚿 shower
U+1F6C1 ; 6.0 # 🛁 bathtub
U+1FA92 ; 12.0 # 🪒 razor
U+1F9F4 ; 11.0 # 🧴 lotion bottle
U+1F9F7 ; 11.0 # 🧷 safety pin
U+1F9F9 ; 11.0 # 🧹 broom
U+1F9FA ; 11.0 # 🧺 basket
U+1F9FB ; 11.0 # 🧻 roll of paper
U+1F9FC ; 11.0 # 🧼 soap
U+1F9FD ; 11.0 # 🧽 sponge
U+1F9EF ; 11.0 # 🧯 fire extinguisher
U+1F6D2 ; 9.0 # 🛒 shopping cart
U+1F6AC ; 6.0 # 🚬 cigarette
U+26B0 ; 4.1 # ⚰ coffin
U+26B1 ; 4.1 # ⚱ funeral urn
U+1F5FF ; 6.0 # 🗿 moai
U+1F3E7 ; 6.0 # 🏧 ATM sign
U+1F6AE ; 6.0 # 🚮 litter in bin sign
U+1F6B0 ; 6.0 # 🚰 potable water
U+267F ; 4.1 # ♿ wheelchair symbol
U+1F6B9 ; 6.0 # 🚹 men’s room
U+1F6BA ; 6.0 # 🚺 women’s room
U+1F6BB ; 6.0 # 🚻 restroom
U+1F6BC ; 6.0 # 🚼 baby symbol
U+1F6BE ; 6.0 # 🚾 water closet
U+1F6C2 ; 6.0 # 🛂 passport control
U+1F6C3 ; 6.0 # 🛃 customs
U+1F6C4 ; 6.0 # 🛄 baggage claim
U+1F6C5 ; 6.0 # 🛅 left luggage
U+26A0 ; 4.0 # ⚠ warning
U+1F6B8 ; 6.0 # 🚸 children crossing
U+26D4 ; 5.2 # ⛔ no entry
U+1F6AB ; 6.0 # 🚫 prohibited
U+1F6B3 ; 6.0 # 🚳 no bicycles
U+1F6AD ; 6.0 # 🚭 no smoking
U+1F6AF ; 6.0 # 🚯 no littering
U+1F6B1 ; 6.0 # 🚱 non-potable water
U+1F6B7 ; 6.0 # 🚷 no pedestrians
U+1F4F5 ; 6.0 # 📵 no mobile phones
U+1F51E ; 6.0 # 🔞 no one under eighteen
U+2622 ; 1.1 # ☢ radioactive
U+2623 ; 1.1 # ☣ biohazard
U+2B06 ; 4.0 # ⬆ up arrow
U+2197 ; 1.1 # ↗ up-right arrow
U+27A1 ; 1.1 # ➡ right arrow
U+2198 ; 1.1 # ↘ down-right arrow
U+2B07 ; 4.0 # ⬇ down arrow
U+2199 ; 1.1 # ↙ down-left arrow
U+2B05 ; 4.0 # ⬅ left arrow
U+2196 ; 1.1 # ↖ up-left arrow
U+2195 ; 1.1 # ↕ up-down arrow
U+2194 ; 1.1 # ↔ left-right arrow
U+21A9 ; 1.1 # ↩ right arrow curving left
U+21AA ; 1.1 # ↪ left arrow curving right
U+2934 ; 3.2 # ⤴ right arrow curving up
U+2935 ; 3.2 # ⤵ right arrow curving down
U+1F503 ; 6.0 # 🔃 clockwise vertical arrows
U+1F504 ; 6.0 # 🔄 counterclockwise arrows button
U+1F519 ; 6.0 # 🔙 BACK arrow
U+1F51A ; 6.0 # 🔚 END arrow
U+1F51B ; 6.0 # 🔛 ON! arrow
U+1F51C ; 6.0 # 🔜 SOON arrow
U+1F51D ; 6.0 # 🔝 TOP arrow
U+1F6D0 ; 8.0 # 🛐 place of worship
U+269B ; 4.1 # ⚛ atom symbol
U+1F549 ; 7.0 # 🕉 om
U+2721 ; 1.1 # ✡ star of David
U+2638 ; 1.1 # ☸ wheel of dharma
U+262F ; 1.1 # ☯ yin yang
U+271D ; 1.1 # ✝ latin cross
U+2626 ; 1.1 # ☦ orthodox cross
U+262A ; 1.1 # ☪ star and crescent
U+262E ; 1.1 # ☮ peace symbol
U+1F54E ; 8.0 # 🕎 menorah
U+1F52F ; 6.0 # 🔯 dotted six-pointed star
U+2648 ; 1.1 # ♈ Aries
U+2649 ; 1.1 # ♉ Taurus
U+264A ; 1.1 # ♊ Gemini
U+264B ; 1.1 # ♋ Cancer
U+264C ; 1.1 # ♌ Leo
U+264D ; 1.1 # ♍ Virgo
U+264E ; 1.1 # ♎ Libra
U+264F ; 1.1 # ♏ Scorpio
U+2650 ; 1.1 # ♐ Sagittarius
U+2651 ; 1.1 # ♑ Capricorn
U+2652 ; 1.1 # ♒ Aquarius
U+2653 ; 1.1 # ♓ Pisces
U+26CE ; 6.0 # ⛎ Ophiuchus
U+1F500 ; 6.0 # 🔀 shuffle tracks button
U+1F501 ; 6.0 # 🔁 repeat button
U+1F502 ; 6.0 # 🔂 repeat single button
U+25B6 ; 1.1 # ▶ play button
U+23E9 ; 6.0 # ⏩ fast-forward button
U+23ED ; 6.0 # ⏭ next track button
U+23EF ; 6.0 # ⏯ play or pause button
U+25C0 ; 1.1 # ◀ reverse button
U+23EA ; 6.0 # ⏪ fast reverse button
U+23EE ; 6.0 # ⏮ last track button
U+1F53C ; 6.0 # 🔼 upwards button
U+23EB ; 6.0 # ⏫ fast up button
U+1F53D ; 6.0 # 🔽 downwards button
U+23EC ; 6.0 # ⏬ fast down button
U+23F8 ; 7.0 # ⏸ pause button
U+23F9 ; 7.0 # ⏹ stop button
U+23FA ; 7.0 # ⏺ record button
U+23CF ; 4.0 # ⏏ eject button
U+1F3A6 ; 6.0 # 🎦 cinema
U+1F505 ; 6.0 # 🔅 dim button
U+1F506 ; 6.0 # 🔆 bright button
U+1F4F6 ; 6.0 # 📶 antenna bars
U+1F4F3 ; 6.0 # 📳 vibration mode
U+1F4F4 ; 6.0 # 📴 mobile phone off
U+2640 ; 1.1 # ♀ female sign
U+2642 ; 1.1 # ♂ male sign
U+2695 ; 4.1 # ⚕ medical symbol
U+267E ; 4.1 # ♾ infinity
U+267B ; 3.2 # ♻ recycling symbol
U+269C ; 4.1 # ⚜ fleur-de-lis
U+1F531 ; 6.0 # 🔱 trident emblem
U+1F4DB ; 6.0 # 📛 name badge
U+1F530 ; 6.0 # 🔰 Japanese symbol for beginner
U+2B55 ; 5.2 # ⭕ hollow red circle
U+2705 ; 6.0 # ✅ check mark button
U+2611 ; 1.1 # ☑ check box with check
U+2714 ; 1.1 # ✔ check mark
U+2716 ; 1.1 # ✖ multiplication sign
U+274C ; 6.0 # ❌ cross mark
U+274E ; 6.0 # ❎ cross mark button
U+2795 ; 6.0 # ➕ plus sign
U+2796 ; 6.0 # ➖ minus sign
U+2797 ; 6.0 # ➗ division sign
U+27B0 ; 6.0 # ➰ curly loop
U+27BF ; 6.0 # ➿ double curly loop
U+303D ; 3.2 # 〽 part alternation mark
U+2733 ; 1.1 # ✳ eight-spoked asterisk
U+2734 ; 1.1 # ✴ eight-pointed star
U+2747 ; 1.1 # ❇ sparkle
U+203C ; 1.1 # ‼ double exclamation mark
U+2049 ; 3.0 # ⁉ exclamation question mark
U+2753 ; 6.0 # ❓ question mark
U+2754 ; 6.0 # ❔ white question mark
U+2755 ; 6.0 # ❕ white exclamation mark
U+2757 ; 5.2 # ❗ exclamation mark
U+3030 ; 1.1 # 〰 wavy dash
U+00A9 ; 1.1 # © copyright
U+00AE ; 1.1 # ® registered
U+2122 ; 1.1 # ™ trade mark
U+0023 U+FE0F U+20E3 ; 3.2 # #️⃣ keycap: #
U+002A U+FE0F U+20E3 ; 3.2 # *️⃣ keycap: *
U+0030 U+FE0F U+20E3 ; 3.2 # 0️⃣ keycap: 0
U+0031 U+FE0F U+20E3 ; 3.2 # 1️⃣ keycap: 1
U+0032 U+FE0F U+20E3 ; 3.2 # 2️⃣ keycap: 2
U+0033 U+FE0F U+20E3 ; 3.2 # 3️⃣ keycap: 3
U+0034 U+FE0F U+20E3 ; 3.2 # 4️⃣ keycap: 4
U+0035 U+FE0F U+20E3 ; 3.2 # 5️⃣ keycap: 5
U+0036 U+FE0F U+20E3 ; 3.2 # 6️⃣ keycap: 6
U+0037 U+FE0F U+20E3 ; 3.2 # 7️⃣ keycap: 7
U+0038 U+FE0F U+20E3 ; 3.2 # 8️⃣ keycap: 8
U+0039 U+FE0F U+20E3 ; 3.2 # 9️⃣ keycap: 9
U+1F51F ; 6.0 # 🔟 keycap: 10
U+1F520 ; 6.0 # 🔠 input latin uppercase
U+1F521 ; 6.0 # 🔡 input latin lowercase
U+1F522 ; 6.0 # 🔢 input numbers
U+1F523 ; 6.0 # 🔣 input symbols
U+1F524 ; 6.0 # 🔤 input latin letters
U+1F170 ; 6.0 # 🅰 A button (blood type)
U+1F18E ; 6.0 # 🆎 AB button (blood type)
U+1F171 ; 6.0 # 🅱 B button (blood type)
U+1F191 ; 6.0 # 🆑 CL button
U+1F192 ; 6.0 # 🆒 COOL button
U+1F193 ; 6.0 # 🆓 FREE button
U+2139 ; 3.0 # ℹ information
U+1F194 ; 6.0 # 🆔 ID button
U+24C2 ; 1.1 # Ⓜ circled M
U+1F195 ; 6.0 # 🆕 NEW button
U+1F196 ; 6.0 # 🆖 NG button
U+1F17E ; 6.0 # 🅾 O button (blood type)
U+1F197 ; 6.0 # 🆗 OK button
U+1F17F ; 5.2 # 🅿 P button
U+1F198 ; 6.0 # 🆘 SOS button
U+1F199 ; 6.0 # 🆙 UP! button
U+1F19A ; 6.0 # 🆚 VS button
U+1F201 ; 6.0 # 🈁 Japanese “here” button
U+1F202 ; 6.0 # 🈂 Japanese “service charge” button
U+1F237 ; 6.0 # 🈷 Japanese “monthly amount” button
U+1F236 ; 6.0 # 🈶 Japanese “not free of charge” button
U+1F22F ; 5.2 # 🈯 Japanese “reserved” button
U+1F250 ; 6.0 # 🉐 Japanese “bargain” button
U+1F239 ; 6.0 # 🈹 Japanese “discount” button
U+1F21A ; 5.2 # 🈚 Japanese “free of charge” button
U+1F232 ; 6.0 # 🈲 Japanese “prohibited” button
U+1F251 ; 6.0 # 🉑 Japanese “acceptable” button
U+1F238 ; 6.0 # 🈸 Japanese “application” button
U+1F234 ; 6.0 # 🈴 Japanese “passing grade” button
U+1F233 ; 6.0 # 🈳 Japanese “vacancy” button
U+3297 ; 1.1 # ㊗ Japanese “congratulations” button
U+3299 ; 1.1 # ㊙ Japanese “secret” button
U+1F23A ; 6.0 # 🈺 Japanese “open for business” button
U+1F235 ; 6.0 # 🈵 Japanese “no vacancy” button
U+1F534 ; 6.0 # 🔴 red circle
U+1F7E0 ; 12.0 # 🟠 orange circle
U+1F7E1 ; 12.0 # 🟡 yellow circle
U+1F7E2 ; 12.0 # 🟢 green circle
U+1F535 ; 6.0 # 🔵 blue circle
U+1F7E3 ; 12.0 # 🟣 purple circle
U+1F7E4 ; 12.0 # 🟤 brown circle
U+26AB ; 4.1 # ⚫ black circle
U+26AA ; 4.1 # ⚪ white circle
U+1F7E5 ; 12.0 # 🟥 red square
U+1F7E7 ; 12.0 # 🟧 orange square
U+1F7E8 ; 12.0 # 🟨 yellow square
U+1F7E9 ; 12.0 # 🟩 green square
U+1F7E6 ; 12.0 # 🟦 blue square
U+1F7EA ; 12.0 # 🟪 purple square
U+1F7EB ; 12.0 # 🟫 brown square
U+2B1B ; 5.1 # ⬛ black large square
U+2B1C ; 5.1 # ⬜ white large square
U+25FC ; 3.2 # ◼ black medium square
U+25FB ; 3.2 # ◻ white medium square
U+25FE ; 3.2 # ◾ black medium-small square
U+25FD ; 3.2 # ◽ white medium-small square
U+25AA ; 1.1 # ▪ black small square
U+25AB ; 1.1 # ▫ white small square
U+1F536 ; 6.0 # 🔶 large orange diamond
U+1F537 ; 6.0 # 🔷 large blue diamond
U+1F538 ; 6.0 # 🔸 small orange diamond
U+1F539 ; 6.0 # 🔹 small blue diamond
U+1F53A ; 6.0 # 🔺 red triangle pointed up
U+1F53B ; 6.0 # 🔻 red triangle pointed down
U+1F4A0 ; 6.0 # 💠 diamond with a dot
U+1F518 ; 6.0 # 🔘 radio button
U+1F533 ; 6.0 # 🔳 white square button
U+1F532 ; 6.0 # 🔲 black square button
U+1F3C1 ; 6.0 # 🏁 chequered flag
U+1F6A9 ; 6.0 # 🚩 triangular flag
U+1F38C ; 6.0 # 🎌 crossed flags
U+1F3F4 ; 7.0 # 🏴 black flag
U+1F3F3 ; 7.0 # 🏳 white flag
U+1F3F3 U+FE0F U+200D U+1F308 ; 7.0 # 🏳️‍🌈 rainbow flag
U+1F3F4 U+200D U+2620 U+FE0F ; 7.0 # 🏴‍☠️ pirate flag
U+1F1E6 U+1F1E8 ; 6.0 # 🇦🇨 flag: Ascension Island
U+1F1E6 U+1F1E9 ; 6.0 # 🇦🇩 flag: Andorra
U+1F1E6 U+1F1EA ; 6.0 # 🇦🇪 flag: United Arab Emirates
U+1F1E6 U+1F1EB ; 6.0 # 🇦🇫 flag: Afghanistan
U+1F1E6 U+1F1EC ; 6.0 # 🇦🇬 flag: Antigua & Barbuda
U+1F1E6 U+1F1EE ; 6.0 # 🇦🇮 flag: Anguilla
U+1F1E6 U+1F1F1 ; 6.0 # 🇦🇱 flag: Albania
U+1F1E6 U+1F1F2 ; 6.0 # 🇦🇲 flag: Armenia
U+1F1E6 U+1F1F4 ; 6.0 # 🇦🇴 flag: Angola
U+1F1E6 U+1F1F6 ; 6.0 # 🇦🇶 flag: Antarctica
U+1F1E6 U+1F1F7 ; 6.0 # 🇦🇷 flag: Argentina
U+1F1E6 U+1F1F8 ; 6.0 # 🇦🇸 flag: American Samoa
U+1F1E6 U+1F1F9 ; 6.0 # 🇦🇹 flag: Austria
U+1F1E6 U+1F1FA ; 6.0 # 🇦🇺 flag: Australia
U+1F1E6 U+1F1FC ; 6.0 # 🇦🇼 flag: Aruba
U+1F1E6 U+1F1FD ; 6.0 # 🇦🇽 flag: Åland Islands
U+1F1E6 U+1F1FF ; 6.0 # 🇦🇿 flag: Azerbaijan
U+1F1E7 U+1F1E6 ; 6.0 # 🇧🇦 flag: Bosnia & Herzegovina
U+1F1E7 U+1F1E7 ; 6.0 # 🇧🇧 flag: Barbados
U+1F1E7 U+1F1E9 ; 6.0 # 🇧🇩 flag: Bangladesh
U+1F1E7 U+1F1EA ; 6.0 # 🇧🇪 flag: Belgium
U+1F1E7 U+1F1EB ; 6.0 # 🇧🇫 flag: Burkina Faso
U+1F1E7 U+1F1EC ; 6.0 # 🇧🇬 flag: Bulgaria
U+1F1E7 U+1F1ED ; 6.0 # 🇧🇭 flag: Bahrain
U+1F1E7 U+1F1EE ; 6.0 # 🇧🇮 flag: Burundi
U+1F1E7 U+1F1EF ; 6.0 # 🇧🇯 flag: Benin
U+1F1E7 U+1F1F1 ; 6.0 # 🇧🇱 flag: St. Barthélemy
U+1F1E7 U+1F1F2 ; 6.0 # 🇧🇲 flag: Bermuda
U+1F1E7 U+1F1F3 ; 6.0 # 🇧🇳 flag: Brunei
U+1F1E7 U+1F1F4 ; 6.0 # 🇧🇴 flag: Bolivia
U+1F1E7 U+1F1F6 ; 6.0 # 🇧🇶 flag: Caribbean Netherlands
U+1F1E7 U+1F1F7 ; 6.0 # 🇧🇷 flag: Brazil
U+1F1E7 U+1F1F8 ; 6.0 # 🇧🇸 flag: Bahamas
U+1F1E7 U+1F1F9 ; 6.0 # 🇧🇹 flag: Bhutan
U+1F1E7 U+1F1FB ; 6.0 # 🇧🇻 flag: Bouvet Island
U+1F1E7 U+1F1FC ; 6.0 # 🇧🇼 flag: Botswana
U+1F1E7 U+1F1FE ; 6.0 # 🇧🇾 flag: Belarus
U+1F1E7 U+1F1FF ; 6.0 # 🇧🇿 flag: Belize
U+1F1E8 U+1F1E6 ; 6.0 # 🇨🇦 flag: Canada
U+1F1E8 U+1F1E8 ; 6.0 # 🇨🇨 flag: Cocos (Keeling) Islands
U+1F1E8 U+1F1E9 ; 6.0 # 🇨🇩 flag: Congo - Kinshasa
U+1F1E8 U+1F1EB ; 6.0 # 🇨🇫 flag: Central African Republic
U+1F1E8 U+1F1EC ; 6.0 # 🇨🇬 flag: Congo - Brazzaville
U+1F1E8 U+1F1ED ; 6.0 # 🇨🇭 flag: Switzerland
U+1F1E8 U+1F1EE ; 6.0 # 🇨🇮 flag: Côte d’Ivoire
U+1F1E8 U+1F1F0 ; 6.0 # 🇨🇰 flag: Cook Islands
U+1F1E8 U+1F1F1 ; 6.0 # 🇨🇱 flag: Chile
U+1F1E8 U+1F1F2 ; 6.0 # 🇨🇲 flag: Cameroon
U+1F1E8 U+1F1F3 ; 6.0 # 🇨🇳 flag: China
U+1F1E8 U+1F1F4 ; 6.0 # 🇨🇴 flag: Colombia
U+1F1E8 U+1F1F5 ; 6.0 # 🇨🇵 flag: Clipperton Island
U+1F1E8 U+1F1F7 ; 6.0 # 🇨🇷 flag: Costa Rica
U+1F1E8 U+1F1FA ; 6.0 # 🇨🇺 flag: Cuba
U+1F1E8 U+1F1FB ; 6.0 # 🇨🇻 flag: Cape Verde
U+1F1E8 U+1F1FC ; 6.0 # 🇨🇼 flag: Curaçao
U+1F1E8 U+1F1FD ; 6.0 # 🇨🇽 flag: Christmas Island
U+1F1E8 U+1F1FE ; 6.0 # 🇨🇾 flag: Cyprus
U+1F1E8 U+1F1FF ; 6.0 # 🇨🇿 flag: Czechia
U+1F1E9 U+1F1EA ; 6.0 # 🇩🇪 flag: Germany
U+1F1E9 U+1F1EC ; 6.0 # 🇩🇬 flag: Diego Garcia
U+1F1E9 U+1F1EF ; 6.0 # 🇩🇯 flag: Djibouti
U+1F1E9 U+1F1F0 ; 6.0 # 🇩🇰 flag: Denmark
U+1F1E9 U+1F1F2 ; 6.0 # 🇩🇲 flag: Dominica
U+1F1E9 U+1F1F4 ; 6.0 # 🇩🇴 flag: Dominican Republic
U+1F1E9 U+1F1FF ; 6.0 # 🇩🇿 flag: Algeria
U+1F1EA U+1F1E6 ; 6.0 # 🇪🇦 flag: Ceuta & Melilla
U+1F1EA U+1F1E8 ; 6.0 # 🇪🇨 flag: Ecuador
U+1F1EA U+1F1EA ; 6.0 # 🇪🇪 flag: Estonia
U+1F1EA U+1F1EC ; 6.0 # 🇪🇬 flag: Egypt
U+1F1EA U+1F1ED ; 6.0 # 🇪🇭 flag: Western Sahara
U+1F1EA U+1F1F7 ; 6.0 # 🇪🇷 flag: Eritrea
U+1F1EA U+1F1F8 ; 6.0 # 🇪🇸 flag: Spain
U+1F1EA U+1F1F9 ; 6.0 # 🇪🇹 flag: Ethiopia
U+1F1EA U+1F1FA ; 6.0 # 🇪🇺 flag: European Union
U+1F1EB U+1F1EE ; 6.0 # 🇫🇮 flag: Finland
U+1F1EB U+1F1EF ; 6.0 # 🇫🇯 flag: Fiji
U+1F1EB U+1F1F0 ; 6.0 # 🇫🇰 flag: Falkland Islands
U+1F1EB U+1F1F2 ; 6.0 # 🇫🇲 flag: Micronesia
U+1F1EB U+1F1F4 ; 6.0 # 🇫🇴 flag: Faroe Islands
U+1F1EB U+1F1F7 ; 6.0 # 🇫🇷 flag: France
U+1F1EC U+1F1E6 ; 6.0 # 🇬🇦 flag: Gabon
U+1F1EC U+1F1E7 ; 6.0 # 🇬🇧 flag: United Kingdom
U+1F1EC U+1F1E9 ; 6.0 # 🇬🇩 flag: Grenada
U+1F1EC U+1F1EA ; 6.0 # 🇬🇪 flag: Georgia
U+1F1EC U+1F1EB ; 6.0 # 🇬🇫 flag: French Guiana
U+1F1EC U+1F1EC ; 6.0 # 🇬🇬 flag: Guernsey
U+1F1EC U+1F1ED ; 6.0 # 🇬🇭 flag: Ghana
U+1F1EC U+1F1EE ; 6.0 # 🇬🇮 flag: Gibraltar
U+1F1EC U+1F1F1 ; 6.0 # 🇬🇱 flag: Greenland
U+1F1EC U+1F1F2 ; 6.0 # 🇬🇲 flag: Gambia
U+1F1EC U+1F1F3 ; 6.0 # 🇬🇳 flag: Guinea
U+1F1EC U+1F1F5 ; 6.0 # 🇬🇵 flag: Guadeloupe
U+1F1EC U+1F1F6 ; 6.0 # 🇬🇶 flag: Equatorial Guinea
U+1F1EC U+1F1F7 ; 6.0 # 🇬🇷 flag: Greece
U+1F1EC U+1F1F8 ; 6.0 # 🇬🇸 flag: South Georgia & South Sandwich Islands
U+1F1EC U+1F1F9 ; 6.0 # 🇬🇹 flag: Guatemala
U+1F1EC U+1F1FA ; 6.0 # 🇬🇺 flag: Guam
U+1F1EC U+1F1FC ; 6.0 # 🇬🇼 flag: Guinea-Bissau
U+1F1EC U+1F1FE ; 6.0 # 🇬🇾 flag: Guyana
U+1F1ED U+1F1F0 ; 6.0 # 🇭🇰 flag: Hong Kong SAR China
U+1F1ED U+1F1F2 ; 6.0 # 🇭🇲 flag: Heard & McDonald Islands
U+1F1ED U+1F1F3 ; 6.0 # 🇭🇳 flag: Honduras
U+1F1ED U+1F1F7 ; 6.0 # 🇭🇷 flag: Croatia
U+1F1ED U+1F1F9 ; 6.0 # 🇭🇹 flag: Haiti
U+1F1ED U+1F1FA ; 6.0 # 🇭🇺 flag: Hungary
U+1F1EE U+1F1E8 ; 6.0 # 🇮🇨 flag: Canary Islands
U+1F1EE U+1F1E9 ; 6.0 # 🇮🇩 flag: Indonesia
U+1F1EE U+1F1EA ; 6.0 # 🇮🇪 flag: Ireland
U+1F1EE U+1F1F1 ; 6.0 # 🇮🇱 flag: Israel
U+1F1EE U+1F1F2 ; 6.0 # 🇮🇲 flag: Isle of Man
U+1F1EE U+1F1F3 ; 6.0 # 🇮🇳 flag: India
U+1F1EE U+1F1F4 ; 6.0 # 🇮🇴 flag: British Indian Ocean Territory
U+1F1EE U+1F1F6 ; 6.0 # 🇮🇶 flag: Iraq
U+1F1EE U+1F1F7 ; 6.0 # 🇮🇷 flag: Iran
U+1F1EE U+1F1F8 ; 6.0 # 🇮🇸 flag: Iceland
U+1F1EE U+1F1F9 ; 6.0 # 🇮🇹 flag: Italy
U+1F1EF U+1F1EA ; 6.0 # 🇯🇪 flag: Jersey
U+1F1EF U+1F1F2 ; 6.0 # 🇯🇲 flag: Jamaica
U+1F1EF U+1F1F4 ; 6.0 # 🇯🇴 flag: Jordan
U+1F1EF U+1F1F5 ; 6.0 # 🇯🇵 flag: Japan
U+1F1F0 U+1F1EA ; 6.0 # 🇰🇪 flag: Kenya
U+1F1F0 U+1F1EC ; 6.0 # 🇰🇬 flag: Kyrgyzstan
U+1F1F0 U+1F1ED ; 6.0 # 🇰🇭 flag: Cambodia
U+1F1F0 U+1F1EE ; 6.0 # 🇰🇮 flag: Kiribati
U+1F1F0 U+1F1F2 ; 6.0 # 🇰🇲 flag: Comoros
U+1F1F0 U+1F1F3 ; 6.0 # 🇰🇳 flag: St. Kitts & Nevis
U+1F1F0 U+1F1F5 ; 6.0 # 🇰🇵 flag: North Korea
U+1F1F0 U+1F1F7 ; 6.0 # 🇰🇷 flag: South Korea
U+1F1F0 U+1F1FC ; 6.0 # 🇰🇼 flag: Kuwait
U+1F1F0 U+1F1FE ; 6.0 # 🇰🇾 flag: Cayman Islands
U+1F1F0 U+1F1FF ; 6.0 # 🇰🇿 flag: Kazakhstan
U+1F1F1 U+1F1E6 ; 6.0 # 🇱🇦 flag: Laos
U+1F1F1 U+1F1E7 ; 6.0 # 🇱🇧 flag: Lebanon
U+1F1F1 U+1F1E8 ; 6.0 # 🇱🇨 flag: St. Lucia
U+1F1F1 U+1F1EE ; 6.0 # 🇱🇮 flag: Liechtenstein
U+1F1F1 U+1F1F0 ; 6.0 # 🇱🇰 flag: Sri Lanka
U+1F1F1 U+1F1F7 ; 6.0 # 🇱🇷 flag: Liberia
U+1F1F1 U+1F1F8 ; 6.0 # 🇱🇸 flag: Lesotho
U+1F1F1 U+1F1F9 ; 6.0 # 🇱🇹 flag: Lithuania
U+1F1F1 U+1F1FA ; 6.0 # 🇱🇺 flag: Luxembourg
U+1F1F1 U+1F1FB ; 6.0 # 🇱🇻 flag: Latvia
U+1F1F1 U+1F1FE ; 6.0 # 🇱🇾 flag: Libya
U+1F1F2 U+1F1E6 ; 6.0 # 🇲🇦 flag: Morocco
U+1F1F2 U+1F1E8 ; 6.0 # 🇲🇨 flag: Monaco
U+1F1F2 U+1F1E9 ; 6.0 # 🇲🇩 flag: Moldova
U+1F1F2 U+1F1EA ; 6.0 # 🇲🇪 flag: Montenegro
U+1F1F2 U+1F1EB ; 6.0 # 🇲🇫 flag: St. Martin
U+1F1F2 U+1F1EC ; 6.0 # 🇲🇬 flag: Madagascar
U+1F1F2 U+1F1ED ; 6.0 # 🇲🇭 flag: Marshall Islands
U+1F1F2 U+1F1F0 ; 6.0 # 🇲🇰 flag: North Macedonia
U+1F1F2 U+1F1F1 ; 6.0 # 🇲🇱 flag: Mali
U+1F1F2 U+1F1F2 ; 6.0 # 🇲🇲 flag: Myanmar (Burma)
U+1F1F2 U+1F1F3 ; 6.0 # 🇲🇳 flag: Mongolia
U+1F1F2 U+1F1F4 ; 6.0 # 🇲🇴 flag: Macao SAR China
U+1F1F2 U+1F1F5 ; 6.0 # 🇲🇵 flag: Northern Mariana Islands
U+1F1F2 U+1F1F6 ; 6.0 # 🇲🇶 flag: Martinique
U+1F1F2 U+1F1F7 ; 6.0 # 🇲🇷 flag: Mauritania
U+1F1F2 U+1F1F8 ; 6.0 # 🇲🇸 flag: Montserrat
U+1F1F2 U+1F1F9 ; 6.0 # 🇲🇹 flag: Malta
U+1F1F2 U+1F1FA ; 6.0 # 🇲🇺 flag: Mauritius
U+1F1F2 U+1F1FB ; 6.0 # 🇲🇻 flag: Maldives
U+1F1F2 U+1F1FC ; 6.0 # 🇲🇼 flag: Malawi
U+1F1F2 U+1F1FD ; 6.0 # 🇲🇽 flag: Mexico
U+1F1F2 U+1F1FE ; 6.0 # 🇲🇾 flag: Malaysia
U+1F1F2 U+1F1FF ; 6.0 # 🇲🇿 flag: Mozambique
U+1F1F3 U+1F1E6 ; 6.0 # 🇳🇦 flag: Namibia
U+1F1F3 U+1F1E8 ; 6.0 # 🇳🇨 flag: New Caledonia
U+1F1F3 U+1F1EA ; 6.0 # 🇳🇪 flag: Niger
U+1F1F3 U+1F1EB ; 6.0 # 🇳🇫 flag: Norfolk Island
U+1F1F3 U+1F1EC ; 6.0 # 🇳🇬 flag: Nigeria
U+1F1F3 U+1F1EE ; 6.0 # 🇳🇮 flag: Nicaragua
U+1F1F3 U+1F1F1 ; 6.0 # 🇳🇱 flag: Netherlands
U+1F1F3 U+1F1F4 ; 6.0 # 🇳🇴 flag: Norway
U+1F1F3 U+1F1F5 ; 6.0 # 🇳🇵 flag: Nepal
U+1F1F3 U+1F1F7 ; 6.0 # 🇳🇷 flag: Nauru
U+1F1F3 U+1F1FA ; 6.0 # 🇳🇺 flag: Niue
U+1F1F3 U+1F1FF ; 6.0 # 🇳🇿 flag: New Zealand
U+1F1F4 U+1F1F2 ; 6.0 # 🇴🇲 flag: Oman
U+1F1F5 U+1F1E6 ; 6.0 # 🇵🇦 flag: Panama
U+1F1F5 U+1F1EA ; 6.0 # 🇵🇪 flag: Peru
U+1F1F5 U+1F1EB ; 6.0 # 🇵🇫 flag: French Polynesia
U+1F1F5 U+1F1EC ; 6.0 # 🇵🇬 flag: Papua New Guinea
U+1F1F5 U+1F1ED ; 6.0 # 🇵🇭 flag: Philippines
U+1F1F5 U+1F1F0 ; 6.0 # 🇵🇰 flag: Pakistan
U+1F1F5 U+1F1F1 ; 6.0 # 🇵🇱 flag: Poland
U+1F1F5 U+1F1F2 ; 6.0 # 🇵🇲 flag: St. Pierre & Miquelon
U+1F1F5 U+1F1F3 ; 6.0 # 🇵🇳 flag: Pitcairn Islands
U+1F1F5 U+1F1F7 ; 6.0 # 🇵🇷 flag: Puerto Rico
U+1F1F5 U+1F1F8 ; 6.0 # 🇵🇸 flag: Palestinian Territories
U+1F1F5 U+1F1F9 ; 6.0 # 🇵🇹 flag: Portugal
U+1F1F5 U+1F1FC ; 6.0 # 🇵🇼 flag: Palau
U+1F1F5 U+1F1FE ; 6.0 # 🇵🇾 flag: Paraguay
U+1F1F6 U+1F1E6 ; 6.0 # 🇶🇦 flag: Qatar
U+1F1F7 U+1F1EA ; 6.0 # 🇷🇪 flag: Réunion
U+1F1F7 U+1F1F4 ; 6.0 # 🇷🇴 flag: Romania
U+1F1F7 U+1F1F8 ; 6.0 # 🇷🇸 flag: Serbia
U+1F1F7 U+1F1FA ; 6.0 # 🇷🇺 flag: Russia
U+1F1F7 U+1F1FC ; 6.0 # 🇷🇼 flag: Rwanda
U+1F1F8 U+1F1E6 ; 6.0 # 🇸🇦 flag: Saudi Arabia
U+1F1F8 U+1F1E7 ; 6.0 # 🇸🇧 flag: Solomon Islands
U+1F1F8 U+1F1E8 ; 6.0 # 🇸🇨 flag: Seychelles
U+1F1F8 U+1F1E9 ; 6.0 # 🇸🇩 flag: Sudan
U+1F1F8 U+1F1EA ; 6.0 # 🇸🇪 flag: Sweden
U+1F1F8 U+1F1EC ; 6.0 # 🇸🇬 flag: Singapore
U+1F1F8 U+1F1ED ; 6.0 # 🇸🇭 flag: St. Helena
U+1F1F8 U+1F1EE ; 6.0 # 🇸🇮 flag: Slovenia
U+1F1F8 U+1F1EF ; 6.0 # 🇸🇯 flag: Svalbard & Jan Mayen
U+1F1F8 U+1F1F0 ; 6.0 # 🇸🇰 flag: Slovakia
U+1F1F8 U+1F1F1 ; 6.0 # 🇸🇱 flag: Sierra Leone
U+1F1F8 U+1F1F2 ; 6.0 # 🇸🇲 flag: San Marino
U+1F1F8 U+1F1F3 ; 6.0 # 🇸🇳 flag: Senegal
U+1F1F8 U+1F1F4 ; 6.0 # 🇸🇴 flag: Somalia
U+1F1F8 U+1F1F7 ; 6.0 # 🇸🇷 flag: Suriname
U+1F1F8 U+1F1F8 ; 6.0 # 🇸🇸 flag: South Sudan
U+1F1F8 U+1F1F9 ; 6.0 # 🇸🇹 flag: São Tomé & Príncipe
U+1F1F8 U+1F1FB ; 6.0 # 🇸🇻 flag: El Salvador
U+1F1F8 U+1F1FD ; 6.0 # 🇸🇽 flag: Sint Maarten
U+1F1F8 U+1F1FE ; 6.0 # 🇸🇾 flag: Syria
U+1F1F8 U+1F1FF ; 6.0 # 🇸🇿 flag: Eswatini
U+1F1F9 U+1F1E6 ; 6.0 # 🇹🇦 flag: Tristan da Cunha
U+1F1F9 U+1F1E8 ; 6.0 # 🇹🇨 flag: Turks & Caicos Islands
U+1F1F9 U+1F1E9 ; 6.0 # 🇹🇩 flag: Chad
U+1F1F9 U+1F1EB ; 6.0 # 🇹🇫 flag: French Southern Territories
U+1F1F9 U+1F1EC ; 6.0 # 🇹🇬 flag: Togo
U+1F1F9 U+1F1ED ; 6.0 # 🇹🇭 flag: Thailand
U+1F1F9 U+1F1EF ; 6.0 # 🇹🇯 flag: Tajikistan
U+1F1F9 U+1F1F0 ; 6.0 # 🇹🇰 flag: Tokelau
U+1F1F9 U+1F1F1 ; 6.0 # 🇹🇱 flag: Timor-Leste
U+1F1F9 U+1F1F2 ; 6.0 # 🇹🇲 flag: Turkmenistan
U+1F1F9 U+1F1F3 ; 6.0 # 🇹🇳 flag: Tunisia
U+1F1F9 U+1F1F4 ; 6.0 # 🇹🇴 flag: Tonga
U+1F1F9 U+1F1F7 ; 6.0 # 🇹🇷 flag: Turkey
U+1F1F9 U+1F1F9 ; 6.0 # 🇹🇹 flag: Trinidad & Tobago
U+1F1F9 U+1F1FB ; 6.0 # 🇹🇻 flag: Tuvalu
U+1F1F9 U+1F1FC ; 6.0 # 🇹🇼 flag: Taiwan
U+1F1F9 U+1F1FF ; 6.0 # 🇹🇿 flag: Tanzania
U+1F1FA U+1F1E6 ; 6.0 # 🇺🇦 flag: Ukraine
U+1F1FA U+1F1EC ; 6.0 # 🇺🇬 flag: Uganda
U+1F1FA U+1F1F2 ; 6.0 # 🇺🇲 flag: U.S. Outlying Islands
U+1F1FA U+1F1F3 ; 6.0 # 🇺🇳 flag: United Nations
U+1F1FA U+1F1F8 ; 6.0 # 🇺🇸 flag: United States
U+1F1FA U+1F1FE ; 6.0 # 🇺🇾 flag: Uruguay
U+1F1FA U+1F1FF ; 6.0 # 🇺🇿 flag: Uzbekistan
U+1F1FB U+1F1E6 ; 6.0 # 🇻🇦 flag: Vatican City
U+1F1FB U+1F1E8 ; 6.0 # 🇻🇨 flag: St. Vincent & Grenadines
U+1F1FB U+1F1EA ; 6.0 # 🇻🇪 flag: Venezuela
U+1F1FB U+1F1EC ; 6.0 # 🇻🇬 flag: British Virgin Islands
U+1F1FB U+1F1EE ; 6.0 # 🇻🇮 flag: U.S. Virgin Islands
U+1F1FB U+1F1F3 ; 6.0 # 🇻🇳 flag: Vietnam
U+1F1FB U+1F1FA ; 6.0 # 🇻🇺 flag: Vanuatu
U+1F1FC U+1F1EB ; 6.0 # 🇼🇫 flag: Wallis & Futuna
U+1F1FC U+1F1F8 ; 6.0 # 🇼🇸 flag: Samoa
U+1F1FD U+1F1F0 ; 6.0 # 🇽🇰 flag: Kosovo
U+1F1FE U+1F1EA ; 6.0 # 🇾🇪 flag: Yemen
U+1F1FE U+1F1F9 ; 6.0 # 🇾🇹 flag: Mayotte
U+1F1FF U+1F1E6 ; 6.0 # 🇿🇦 flag: South Africa
U+1F1FF U+1F1F2 ; 6.0 # 🇿🇲 flag: Zambia
U+1F1FF U+1F1FC ; 6.0 # 🇿🇼 flag: Zimbabwe
U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F ; 7.0 # 🏴󠁧󠁢󠁥󠁮󠁧󠁿 flag: ⊖gbeng
U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F ; 7.0 # 🏴󠁧󠁢󠁳󠁣󠁴󠁿 flag: ⊖gbsct
U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F ; 7.0 # 🏴󠁧󠁢󠁷󠁬󠁳󠁿 flag: ⊖gbwls
`
	.trim()
	.split('\n')
	.map(line => {
		const codes = line.split(';')[0].trim();
		return codes.replace(/\U\+/g, '').replace(/ /g, '-');
	});

const path = './packages/emoji/src/emojis.json';

const categories = [
	'Smileys & Emotion',
	'People & Body',
	'Food & Drink',
	'Animals & Nature',
	'Travel & Places',
	'Activities',
	'Component',
	'Objects',
	'Symbols',
	'Flags',
];

const sort = emojis => {
	const result = [];

	for (const categoryName of categories) {
		const filtered = emojis.filter(emoji => emoji.category === categoryName);
		const merged = {};

		filter: for (const emoji of filtered) {
			const index = order.indexOf(emoji.unified);

			if (index === -1) {
				continue filter;
			}

			merged[index] = emoji;
		}

		const indexes = Object.keys(merged).sort();

		console.log(categoryName, indexes);

		const final = [];

		for (const index of indexes) {
			final.push(merged[index]);
		}

		result.push(...final);
	}

	return result.map(emoji => {
		const {name, category, unified, sheet_y, sheet_x, short_names} = emoji;
		return {name, category, unified, sheet_y, sheet_x, short_names};
	});
};

const write = text => {
	return fs.writeFile(path, text);
};

void fs
	.readFile(path)
	.then(buf => buf.toString('utf-8'))
	.then(JSON.parse)
	.then(sort)
	.then(JSON.stringify)
	.then(write);
