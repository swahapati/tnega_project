var treeData = {
   zelda : {value : "Zelda Timeline", parent : ""},
   a : {value : "Skyward Sword", parent : "zelda"},
   b : {value : "The Minish Cap", parent : "a"},
   c : {value : "Four Swords", parent : "b"},
   d : {value : "Ocarina of Time", parent : "c"},
   e : {value : "A link to Past", parent : "d"},
   f : {value : "Oracle of Seasons & Oracle of Ages", parent : "e"},
   g : {value : "Link's Awakening", parent : "f"},
   h : {value : "The Legend of Zelda", parent : "g"},
   i : {value : "Adventure of Link", parent : "h"},
   j : {value : "Majora's Mask", parent : "d"},
   k : {value : "Twilight Princess", parent : "j"},
   l : {value : "Four Swords", parent : "k"},
   m : {value : "The Wind Waker", parent : "d"},
   n : {value : "Phanthom Hourglass", parent : "m"},
   o : {value : "Spirit Tracks", parent : "n"}
};

TreeData(tree, "#tree");