type fileType = { [key: string]: string };

export class FontModel {
  kind: string;
  family: string;
  variants: string[] = [];
  subsets: string[] = [];
  version: string;
  lastModified: string;
  files: fileType;

  constructor(data: FontModel) {
    this.kind = data.kind;
    this.family = data.family;
    this.variants = data.variants.map(el => el);
    this.subsets = data.subsets.map(el => el);
    this.version = data.version;
    this.lastModified = data.lastModified;
    this.files = { ...data.files };
  }
}
