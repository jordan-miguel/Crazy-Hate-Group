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
	v = v.replace(/\bIslamic-State\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\bislamic-state\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\bislamic state\b/g, "CRAZY HATE GROUP");
        v = v.replace(/\bislamic state\b/g, "crazy hate group");
	v = v.replace(/\bISIS\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\bIsis\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\bisis\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\b(CRAZY HATE GROUP)\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\b(CRAZY HATE GROUP)\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\b(CRAZY HATE GROUP)\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\b(CRAZY HATE GROUP)\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\bislamic militants\b/g, "crazy militants");
	v = v.replace(/\bIslamic Militants\b/g, "Crazy Militants");
	v = v.replace(/\bIslamic-Militants\b/g, "Crazy-Militants");
	v = v.replace(/\bIslamic Militant\b/g, "Crazy Militant");
	v = v.replace(/\bIslamic militants\b/g, "Crazy Militant");


  textNode.nodeValue = v;
}
