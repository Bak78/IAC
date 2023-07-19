export interface Usecase<I,O>{
    execute(paylod?:I): Promise<O> | O 
}