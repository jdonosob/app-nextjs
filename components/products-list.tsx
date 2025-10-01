interface Props {
    records: any;
}

export const ProductList = ({ records }: Props) => {
    return (
        <div>
            {records.map((record: any) => (
                <div key={record.id}>
                    {record.artist} {record.name}
                    <img src={record.cover_image} alt={record.name} width={100} height={100} />
                </div>
            ))}
        </div>
    );
}