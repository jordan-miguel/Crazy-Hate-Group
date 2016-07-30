walk(document.body);
document.body.addEventListener('DOMSubtreeModified', function () {
   walk(document.body);
});

function walk(node)
{

	var child, next;

	switch ( node.nodeType )
	{
		case Node.ELEMENT_NODE:
		case Node.DOCUMENT_NODE:
		case Node.DOCUMENT_FRAGMENT_NODE:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case Node.TEXT_NODE:
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
	v = v.replace(/\breligious\b/g, "non-religious");
	v = v.replace(/\bJihadist\b/g, "Non-Jihadist");
	v = v.replace(/\bjihadist\b/g, "Non-Jihadist");
	

	textNode.nodeValue = v;
}
