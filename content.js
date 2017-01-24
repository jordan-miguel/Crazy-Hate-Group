walk(document.body);
document.body.addEventListener('DOMSubtreeModified', function () {
   walk(document.body);
});

function walk(node)
{

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bIslamic State\b/g, "Crazy Hate Group");
	v = v.replace(/\bislamic state\b/g, "crazy hate group");
	v = v.replace(/\bISIS\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\bIsis\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\bisis\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\b(Isis)\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\b(isis)\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\b(ISIS)\b/g, "CRAZY HATE GROUP");


  textNode.nodeValue = v;
}
