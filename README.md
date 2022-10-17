# Speech Mark Corrector

Purely because the generic vertical quotation marks were driving me *crazy*! This script will:

1. Take a file path as an argument (markdown)
2. Read the markdown file
3. Convert all single quotation marks for dialogue to the correct opening and closing
4. By default, the file will be saved into the `correctedFiles` directory. If the `-in-place` flag is used, this will rewrite the corrected data to the original file in the original destination

Once the file have been completed. A sentence such as this:
>'This is to test opening and closing dialogue,' he said.
>
will be converted to:
>
>‘This is to test opening and closing dialogue,’ he said.

## :sparkles: How to run :sparkles:

The file will be saved with the same name as the original file. If a file with the specified file name already exists in the folder given, it will overwrite the file.

**Default**: `npm run dev -- "./your-file-path.md"`

Newly corrected file will be saved in `correctedFiles` by default and will not overwrite the original file.

**In place**: `npm run dev -- "./your-file-path.md" -in-place`

The optional flag `-in-place` will save the new file to your original path with the same file name, therefore overwriting the original file.
