# Speech Mark Corrector

Purely because the generic vertical quotation marks were driving me *crazy*! This script will:

1. Take a file path as an argument (markdown)
2. Read the markdown file
3. Convert all single quotation marks for dialogue to the correct opening and closing
4. Rewrite the corrected data to the original file (**NB: please change the destination path if you don't want your file to overwrite the old one!**)

Once the file have been completed. A sentence such as this:
>'This is to test opening and closing dialogue,' he said.
>
will be converted to:
>
>‘This is to test opening and closing dialogue,’ he said.

## How to run

`npm run dev -- "./your-file-path.md"`

New corrected file will be saved in the original folder by default and **it will overwrite your original file**. Please change the path to write to before running if you want your file to be saved in another folder. The file will be saved with the same file name that was passed in. If a file with the specified file name already exists in the folder given, it will update the file.
