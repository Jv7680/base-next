export abstract class BaseModel<Props = unknown> {
  protected readonly _id: string;
  public createdAt: string;
  public updatedAt: string;

  protected constructor(
    protected props: Props,
    id: string
  ) {
    this._id = id;
    this.createdAt = Date.now().toString();
    this.updatedAt = this.createdAt;
  }

  get id() {
    return this._id;
  }

  public update() {
    this.updatedAt = Date.now().toString();
  }
}
