AIUtil.SetContext Browser("creationtime:=2")

AIUtil.FindTextBlock("SPEAKERS").Click
AIUtil.FindTextBlock("Bose SoundLink Wireless").Click
AIUtil.FindTextBlock("ADD TO CART").Click
AIUtil("shopping_cart").Click
'AIUtil.FindTextBlock("0-").CheckExists True
AIUtil.FindTextBlock("EDIT I REMOVE").Click




