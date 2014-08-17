# maxlength helper 

Cut text up to a certain limit, without breaking words and adding ellipsis.

## Definition

```
{@maxlength str="My long long long long long text" limit="10" break="false" type="chars" ellipsis="..." /}
```

IFF `break` is `true` words will be broken.
IFF `type` is `words` words will be counted, instead of chars (punctuation is not counted).
`ellipsis` is the string which will be appended at the end of the trimmed string.

## Examples

```
{@maxlength str="My long long long long long text" limit="10" /} => My long...
{@maxlength str="My long long long long long text" limit="10" break="true" /} => My long lo...
{@maxlength str="My long long long long long text" limit="4" type="words" /} => My long long long...
{@maxlength str="My long long long long long text" limit="4" type="words" ellipsis="" /} => My long long long
{@maxlength str="My . long - long, long long long text" limit="4" type="words" /} => My . long - long, long...
{@maxlength str="My long long long long long text" limit="4" type="words" ellipsis="(^)_(^)" /} => My long long long(^)_(^)
{@maxlength str="My long long long long long text" limit="32" /} => My long long long long long text
{@maxlength str="My long long long long long text" limit="1000" /} => My long long long long long text
{@maxlength str="My long long long long long text" limit="7" type="words" /} => My long long long long long text
```

## Usage
Depends on dustjs-helpers module to be loaded first since it adds it's definition to the
the dust.helpers property.

In node.js:
require('dustjs-helper-maxlength');

In browser:

If not using require, load the JS some other way and call it with the dust object. As noted earlier,
dustjs-helpers must be loaded earlier.

