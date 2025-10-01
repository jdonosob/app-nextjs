import { createClient } from "@/lib/supabase/client";
import { ProductList } from "@/components/products-list";

export default async function Products() {
    const supabase = await createClient();
    const records = await supabase.from('test_table').select('*');

    return (
        <div>
            <h1>Products Page</h1>
            <ProductList records={records.data} />
        </div>
    );
}